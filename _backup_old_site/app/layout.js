export const metadata = {
  title: "UFX – Decentralized UFO Investigation Network",
  description: "Official site for UFX",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
