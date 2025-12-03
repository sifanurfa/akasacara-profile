"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SelectProject from "./SelectProject";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name or studio name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(5, { message: "Please enter your message" }),
  topics: z.array(z.string()).optional(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      topics: [],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form Data:", values);
    // TODO: send to API or backend endpoint
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col bg-white py-section px-4xl justify-center items-center gap-3xl self-stretch rounded-[10px]"
      >
        <div className="flex flex-col items-start gap-10 self-stretch">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-m self-stretch">
                <FormLabel className="aka-text-title label-input">Who You Are / Represent ?</FormLabel>
                <FormControl className="pointer-events-auto">
                  <Input
                    placeholder="Enter your name or studio name"
                    className="w-full py-l px-l border-[2.5px] border-black rounded-[5px] body-reg aka-text-subtitle-2 bg-transparent focus-visible:ring-2 focus-visible:ring-vfx focus-visible:ring-offset-2 focus-visible:ring-offset-akasacara-yellow focus:outline-none caret-vfx"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-m self-stretch">
                <FormLabel className="aka-text-title label-input">Email</FormLabel>
                <FormControl className="pointer-events-auto">
                  <Input
                    placeholder="Enter your email address"
                    className="w-full py-l px-l border-[2.5px] border-black rounded-[5px] body-reg aka-text-subtitle-2 bg-transparent focus-visible:ring-2 focus-visible:ring-vfx focus-visible:ring-offset-2 focus-visible:ring-offset-akasacara-yellow focus:outline-none caret-vfx"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project type */}
          <FormField
            control={form.control}
            name="topics"
            render={({ field }) => (
                <FormItem className="flex flex-col gap-m self-stretch">
                <FormLabel className="aka-text-title label-input">What&apos;s the Matter ?</FormLabel>
                <FormControl className="pointer-events-auto">
                    <SelectProject {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-m self-stretch">
                <FormLabel className="aka-text-title label-input">Message / Idea / Question</FormLabel>
                <FormControl className="pointer-events-auto">
                  <Textarea
                    placeholder="Write your idea, question, or project brief (3-5 lines)"
                    className="w-full py-md px-md border-[2.5px] border-black rounded-[5px] body-reg aka-text-subtitle-2 bg-transparent focus-visible:ring-2 focus-visible:ring-vfx focus-visible:ring-offset-2 focus-visible:ring-offset-akasacara-yellow focus:outline-none caret-vfx"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-m self-stretch">
          <Button
            type="submit"
            className="flex py-l justify-center items-center gap-2.5 self-stretch bg-vfx rounded-none"
          >
            <span className="button-main vfx-text-title">SUBMIT</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
