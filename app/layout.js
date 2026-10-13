export const metadata = { title: "TeamBoard" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: 24, background: "#f7f7f9" }}>
        {children}
      </body>
    </html>
  );
}
