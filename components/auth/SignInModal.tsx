"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ResgiterType, registerSchema } from "@/validations/authSchema";
import SocialBtn from "./SocialBtn";


export default function SignupModal() {
  const supabase = createClientComponentClient();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResgiterType>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = async (payload: ResgiterType) => {
    const { data, error } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
      options: {
        data: {
          name: payload.name,
        },
      },
    });

    if (error) {
      toast.error(error.message, { theme: "colored" });
    } else if (data.user) {
      await supabase.auth.signInWithPassword({
        email: payload.email,
        password: payload.password,
      });
      setOpen(false);
      router.refresh();
      toast.success("Logged in successfully!", { theme: "colored" });
    }
  };
  return (
    <>
      <AlertDialog open={open}>
        <AlertDialogTrigger asChild>
          <li
            className="mb-2 hover:bg-gray-200 rounded-md p-2 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Sign up
          </li>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle asChild>
              <div className="flex justify-between items-center">
                <span>Sign up</span>
                <X onClick={() => setOpen(false)} className="cursor-pointer" />
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
                  <div className="mt-5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      placeholder="Enter your name"
                      id="name"
                      {...register("name")}
                    />
                    <span className="text-red-400">{errors.name?.message}</span>
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                      {...register("email")}
                    />
                    <span className="text-red-400">
                      {errors.email?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      id="password"
                      {...register("password")}
                    />
                    <span className="text-red-400">
                      {errors.password?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="cpassword">Confirm Password</Label>
                    <Input
                      placeholder="Enter your cpassword"
                      type="password"
                      id="cpassword"
                      {...register("confirmPassword")}
                    />
                    <span className="text-red-400">
                      {errors.confirmPassword?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <Button className="w-full bg-brand">Continue</Button>
                  </div>
                  <div className="text-center py-2 text-lg font-bold text-black">
                    -- OR --
                  </div>
                </form>
                <SocialBtn />
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}