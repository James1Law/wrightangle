export function Background() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-white bg-opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(96, 165, 250, 0) 100%)`,
        }}
      />
    </div>
  );
} 