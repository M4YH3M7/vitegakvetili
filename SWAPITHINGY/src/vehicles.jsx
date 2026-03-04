import { useEffect, useState } from "react";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVehicles() {
      try {
        const res = await fetch("https://swapi.info/api/vehicles");
        const data = await res.json();
        setVehicles(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    getVehicles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-zinc-950 text-zinc-100">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">SWAPI Vehicles</h1>
        <p className="mt-2 text-zinc-400">Count: {vehicles.length}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <div
              key={v.url}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold">{v.name}</h2>
                <span className="rounded-full border border-zinc-700 px-2 py-1 text-xs text-zinc-300">
                  {v.vehicle_class}
                </span>
              </div>

              <p className="mt-1 text-sm text-zinc-400">{v.model}</p>

              <div className="mt-4 space-y-2 text-sm">
                <Row label="Manufacturer" value={v.manufacturer} />
                <Row label="Cost" value={v.cost_in_credits} />
                <Row label="Crew" value={v.crew} />
                <Row label="Passengers" value={v.passengers} />
                <Row label="Speed" value={v.max_atmosphering_speed} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-zinc-400">{label}</span>
      <span className="text-zinc-200">{value || "unknown"}</span>
    </div>
  );
}
