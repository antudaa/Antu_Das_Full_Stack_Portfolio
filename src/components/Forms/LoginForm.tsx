'use client';
import Link from "next/link";
import { Mail, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { message } from "antd";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
    const [login, { isLoading }] = useLoginMutation();

    const router = useRouter();
    const dispatch = useAppDispatch();

    // Initialize react-hook-form with the Zod schema
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: LoginFormValues) => {
        try {
            const res = await login(data).unwrap();
            const userData = res?.data?.user;
            const accessToken = res?.data?.accessToken;
            const refreshToken = res?.data?.refreshToken;
            console.log('User Data => ', userData, "Access Token => ", accessToken, "Refresh Token => ", refreshToken)

            // Dispatch the user data
            dispatch(
                setUser({
                    user: userData,
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                })
            );
            router.push('/dashboard');
            message.success(`Wellcome Back Antu_Daa...😎`);

        } catch (err: unknown) {
            if (err && typeof err === "object" && "data" in err) {
                const error = err as { data: { message: string } };
                message.error(error?.data?.message || "Login failed! Please try again.");
            } else {
                message.error("An unknown error occurred.");
            }
        }
    };

    return (
        <Card className="mx-auto lg:w-3/5">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Login</CardTitle>
                <CardDescription className="text-center">
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="antu.programmer@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center">
                                        <FormLabel>Password</FormLabel>
                                        <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <Input placeholder="********" type="password" required {...field} />
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            {
                                isLoading ? <Loader className="mr-2" /> : <Mail className="mr-2" />
                            }
                            {
                                isLoading ? "Loading" : "Login with Email"
                            }
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </form>
                </Form>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="#" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
