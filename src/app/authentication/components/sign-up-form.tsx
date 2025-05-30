import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const registerSchema = z.object({
  name: z.string().trim().min(1, {message: "Nome é obrigatório"}),
  email: z.string().trim().email().min(1, {message: "Email inválido"}),
  password: z.string().trim().min(8, {message:"Senha deve ter pelo menos 8 caracteres"}),
})

const SignUpForm =  () => {
  
  function onSubmit(values: z.infer<typeof registerSchema>) {
   
    console.log(values)
  }

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  return (
    <Card>
    <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <CardHeader>
        <CardTitle>Criar uma conta</CardTitle>
        <CardDescription>
          Crie uma conta para continar.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
      <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Nome</FormLabel>
        <FormControl>
          <Input placeholder="Digite seu nome" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
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

export default SignUpForm;