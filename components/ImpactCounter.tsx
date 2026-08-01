import type { CSSProperties } from "react";

type ImpactCounterProps = {
  currentLabel?: string;
  currentValue?: number;
  targetLabel?: string;
  targetValue?: number;
  horizon?: string;
  description?: string;
};

export default function ImpactCounter({
  currentLabel = "Personnes déjà touchées",
  currentValue = 38,
  targetLabel = "Ambition d'ici 2030",
  targetValue = 112,
  horizon = "d'ici 2030",
  description = "Notre trajectoire d'impact : élargir l'accès aux programmes de soins et d'éducation sanitaire à l'échelle du continent.",
}: ImpactCounterProps) {
  return (
    <section
      className="section-pad bg-navy text-cream"
      aria-labelledby="impact-heading"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Trajectoire 2030</p>
          <h2
            id="impact-heading"
            className="mt-3 text-3xl text-cream md:text-4xl"
          >
            Notre ambition d&apos;impact
          </h2>
          <p className="mt-3 text-cream/75">{description}</p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
          <div>
            <p className="text-sm tracking-wide text-gold">{currentLabel}</p>
            <p className="mt-2 flex items-baseline gap-1 font-serif text-5xl text-cream md:text-6xl">
              <span
                className="impact-count"
                style={
                  {
                    "--count-target": currentValue,
                    "--count-delay": "0.15s",
                  } as CSSProperties
                }
                aria-hidden
              />
              <span className="sr-only">{currentValue}</span>
              <span className="text-3xl text-gold md:text-4xl">M</span>
            </p>
          </div>

          <p
            className="hidden font-serif text-4xl text-gold/60 sm:block"
            aria-hidden
          >
            /
          </p>

          <div>
            <p className="text-sm tracking-wide text-gold">{targetLabel}</p>
            <p className="mt-2 flex items-baseline gap-1 font-serif text-5xl text-cream md:text-6xl">
              <span
                className="impact-count"
                style={
                  {
                    "--count-target": targetValue,
                    "--count-delay": "0.45s",
                  } as CSSProperties
                }
                aria-hidden
              />
              <span className="sr-only">{targetValue}</span>
              <span className="text-3xl text-gold md:text-4xl">M</span>
            </p>
            <p className="mt-2 text-sm text-cream/60">{horizon}</p>
          </div>
        </div>

        <div className="mt-10 max-w-2xl">
          <div
            className="h-1.5 w-full overflow-hidden rounded-full bg-cream/10"
            role="progressbar"
            aria-valuenow={currentValue}
            aria-valuemin={0}
            aria-valuemax={targetValue}
            aria-label={`Progression : ${currentValue} millions sur ${targetValue} millions`}
          >
            <div
              className="impact-bar h-full rounded-full bg-gradient-to-r from-gold-deep to-gold"
              style={
                {
                  "--progress": `${Math.round((currentValue / targetValue) * 100)}%`,
                } as CSSProperties
              }
            />
          </div>
          <p className="mt-4 font-serif text-xl text-gold-soft md:text-2xl">
            {currentValue}M / {targetValue}M {horizon}
          </p>
        </div>
      </div>
    </section>
  );
}
