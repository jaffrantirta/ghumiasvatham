import { Button, Label, TextInput } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="rounded-3xl p-5 bg-white shadow-md">
        <h1 className="text-center text-slate-500 py-4">Daftar</h1>
        <form>
          <div>
            <Label>Nama</Label>
            <TextInput placeholder="Masukan nama" />
          </div>
          <div>
            <Label>Nama</Label>
            <TextInput placeholder="Masukan nama" />
          </div>
          <div>
            <Label>Nama</Label>
            <TextInput placeholder="Masukan nama" />
          </div>
          <div className="pt-3">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
