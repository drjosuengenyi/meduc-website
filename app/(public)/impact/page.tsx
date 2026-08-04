"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { impactContent } from "@/lib/i18n/impact-content";
import "./impact.css";

export default function ImpactPage() {
  const { lang } = useLanguage();
  const c = impactContent[lang];

  return (
    <div className="impact-page">
      <div className="hero">
        <div className="hero-grid" aria-hidden />
        <div className="w">
          <div className="eyebrow">
            <div className="ey-line" aria-hidden />
            <div className="ey-txt">{c.eyebrow}</div>
          </div>
          <h1>
            {c.h1Line1}
            <br />
            <em>
              {c.h1Em.split("\n").map((line, i, arr) => (
                <span key={line}>
                  {line}
                  {i < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </em>
          </h1>
          <p className="hero-lead">
            {c.leadParts.before}
            <strong>{c.leadParts.strong}</strong>
            {c.leadParts.after}
          </p>
          <div className="result-banner">
            <div className="rb-icon" aria-hidden>
              🎯
            </div>
            <div className="rb-txt">
              <strong>{c.resultBanner.strong}</strong>
              {c.resultBanner.rest}
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="w">
          <div className="sec-label">{c.sec1.label}</div>
          <h2>
            {c.sec1.title}
            <br />
            <em>{c.sec1.titleEm}</em>
          </h2>
          <p className="sec-sub">{c.sec1.sub}</p>
          <div className="ps-grid">
            <div className="ps-row header">
              <div className="ps-hd prob">{c.sec1.probHd}</div>
              <div className="ps-hd sol">{c.sec1.solHd}</div>
            </div>
            {c.sec1.rows.map((row) => (
              <div className="ps-row" key={row.problemStrong}>
                <div className="ps-cell prob-cell">
                  <strong>{row.problemStrong}</strong>
                  {row.problemRest}
                </div>
                <div className="ps-cell sol-cell">
                  <strong>{row.solutionStrong}</strong>
                  {row.solutionRest}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="w">
          <div className="sec-label">{c.sec2.label}</div>
          <h2>
            {c.sec2.title}
            <br />
            <em>{c.sec2.titleEm}</em>
          </h2>
          <p className="sec-sub">{c.sec2.sub}</p>
          <div className="inc-grid">
            {c.sec2.cards.map((card) => (
              <article
                key={card.variant}
                className={`inc-card ic-${card.variant}`}
              >
                <div className="ic-icon" aria-hidden>
                  {card.icon}
                </div>
                <div className="ic-cat">{card.cat}</div>
                <div className="ic-title">{card.title}</div>
                <div className="ic-body">{card.body}</div>
                <div className="ic-tags">
                  {card.tags.map((tag) => (
                    <span className="ic-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="w">
          <div className="sec-label">{c.sec3.label}</div>
          <h2>
            {c.sec3.title}
            <br />
            <em>{c.sec3.titleEm}</em>
          </h2>
          <p className="sec-sub">{c.sec3.sub}</p>
          <div className="result-grid">
            {c.sec3.stats.map((stat) => (
              <div className="res-card" key={stat.n + stat.l}>
                <div className="res-n">{stat.n}</div>
                <div className="res-l">
                  {stat.l.split("\n").map((line, i, arr) => (
                    <span key={line}>
                      {line}
                      {i < arr.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="closing">
            <div className="cl-h">
              {c.sec3.closingTitle}
              <br />
              <em>{c.sec3.closingTitleEm}</em>
            </div>
            <p className="cl-p">
              {c.sec3.closingBody}
              <strong>{c.sec3.closingStrong}</strong>
            </p>
          </div>
        </div>
      </section>

      <div className="w">
        <div className="foot">
          <div className="ft-reg">
            Meduc GM SARL · RCCM : CD/KNG/RCCM/25-B-01820
            <br />
            PTY (LTD) : 2025/780904/07 · D-U-N-S : 366868380
            <br />
            meduc.tech · contact@meduc.tech
          </div>
          <div className="ft-az">{c.powered}</div>
        </div>
      </div>
    </div>
  );
}
