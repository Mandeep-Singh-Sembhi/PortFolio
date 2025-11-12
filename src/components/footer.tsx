export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} mann. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
