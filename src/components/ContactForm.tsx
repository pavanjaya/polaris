"use client";

import { useState } from "react";

const topics = [
  "Power purchase agreement",
  "Land lease / site referral",
  "Partnership or supplier",
  "Press / media",
  "Something else",
];

const fieldClass =
  "w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-brand";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-lg border border-brand/30 bg-brand-tint/50 p-8">
        <h2 className="text-lg font-medium text-ink">Thanks — message received.</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          This demo form doesn&apos;t send anywhere yet. Wire it to your CRM or an
          email endpoint before launch.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-medium text-brand"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-ink-soft">Name</span>
          <input
            required
            name="name"
            className={`mt-1.5 ${fieldClass}`}
            placeholder="Jordan Rivera"
          />
        </label>
        <label className="block">
          <span className="text-sm text-ink-soft">Email</span>
          <input
            required
            type="email"
            name="email"
            className={`mt-1.5 ${fieldClass}`}
            placeholder="jordan@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-ink-soft">Organization</span>
        <input
          name="org"
          className={`mt-1.5 ${fieldClass}`}
          placeholder="Company or utility"
        />
      </label>

      <label className="block">
        <span className="text-sm text-ink-soft">What&apos;s this about?</span>
        <select name="topic" className={`mt-1.5 ${fieldClass}`} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-sm text-ink-soft">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className={`mt-1.5 resize-y ${fieldClass}`}
          placeholder="A few lines on what you're looking to do."
        />
      </label>

      <button
        type="submit"
        className="rounded-lg bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-ink/85"
      >
        Send message
      </button>
    </form>
  );
}
