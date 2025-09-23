export const metadata = {
  title: "UFX – Decentralized UFO Investigation Network",
  description: "Official site for UFX: Decentralized UFO Investigation Network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
