import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // todo: 사이트에 전체적으로 적용할 provider 설정 ex) reCaptcha
  return <>{children}</>;
}
