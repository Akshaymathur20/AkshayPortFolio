

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
           <h2> Innter layout New item</h2>
           {children}


    </>

  );
}
