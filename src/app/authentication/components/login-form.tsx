"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const loginSchema = z.object({
  email: z.string().trim().email().min(1, {message: "Email inválido"}),
  password: z.string().trim().min(8, {message:"Senha deve ter pelo menos 8 caracteres"}),
})

const LoginForm =  () => {
  
  function onSubmit(values: z.infer<typeof loginSchema>) {
   
    console.log(values)
  }

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <Card>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Faça login na sua conta para continuar.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
     
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
        <FormControl>
          <Input placeholder="Digite seu email" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="password"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Senha</FormLabel>
        <FormControl>
          <Input type="password" placeholder="Digite sua senha" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">Criar conta</Button>
      </CardFooter>
    </form>
      </Form>
    </Card>
  )
}

export default LoginForm;