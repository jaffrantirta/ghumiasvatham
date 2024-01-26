"use client";
import { store } from "@/connection/context/UserContext";
import { Button, Label, TextInput } from "flowbite-react";

export default function Home() {
  const executeSubmit = (e) => {
    e.preventDefault();
    const { error } = store({
      name: "Burhan",
      phone: "767565577",
      email: "hhhh@ygtyg",
    });
    console.log(error, "error");
    console.log("hai");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="rounded-3xl p-5 bg-white shadow-md">
        <h1 className="text-center text-slate-500 py-4">Daftar</h1>
        <form onSubmit={executeSubmit}>
          <div>
            <Label>Nama</Label>
            <TextInput placeholder="Masukan nama" />
          </div>
          <div>
            <Label>Nomor WhatsApp</Label>
            <TextInput placeholder="Masukan nomor WhatsApp" />
          </div>
          <div>
            <Label>Email</Label>
            <TextInput placeholder="Masukan email" />
          </div>
          <div className="pt-3">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
