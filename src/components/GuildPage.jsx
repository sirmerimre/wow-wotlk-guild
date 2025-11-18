// wow-wotlk-guild-page.jsx
// React component with English/Hungarian language switch.
// Tailwind expected at runtime.

import React, { useState } from "react";
import LogoImage from '../assets/klikk-logo.png';

const translations = {
    hu: {
        news: "Hírek",
        roster: "Játékoslista",
        apply: "Jelentkezés / Toborzás",
        applyText: "Raidre és laza játékra is toborzunk. Kérjük, linkelj logokat és rövid tapasztalatot.",
        applyHere: "Jelentkezz itt",
        events: "Közelgő Események",
        quickLinks: "Gyors Linkek",
        rules: "Céhszabályzat",
        logs: "Raid Logok",
        strength: "Céherő",
        engagement: "Aktivitási pontszám",
    }
};

const sampleGuild = {
    name: "Klikk",
    Server: "Warmane (https://www.warmane.com/)",
    realm: "Icecrown (PVP)",
    faction: "Alliance",
    progress: "10/12 ICC - 25H",
    motto: "Szilárdan állunk ott, ahol mások elesnek.",
    roster: [
        { name: "Smicerwari", cls: "Warrior", role: "DPS", ilvl: 224, gs: 4785 },
        // { name: "Bromm", cls: "Warrior", role: "DPS", ilvl: 999 },
        // { name: "Ceress", cls: "Priest", role: "Healer", ilvl: 999 },
    ],
    events: [
        { date: "TBC", time: "TBC", zone: "UTC", note: "Raid: ICC 10" },
        // { date: "Sun Nov 23, 2025", time: "19:00", zone: "UTC", note: "Guild PvP Night" },
    ],
    news: [
        { id: 1, title: "Üdvőzőljük az új tagokat", excerpt: "Üdv minden új tagnak és jó játékot." },
    ],
};

export default function GuildPage({ guild = sampleGuild }) {
    const [lang, setLang] = useState("hu");
    const t = translations[lang];

    return (
        <div className="min-h-screen text-slate-100 p-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://instant-carry.com/wp-content/uploads/2023/09/Icecrown-Citadel-Lich-King-scaled-1536x789.webp')" }}>
            <div className="max-w-5xl mx-auto bg-slate-900/60 backdrop-blur rounded-2xl shadow-xl overflow-hidden">
                <header className="flex flex-col md:flex-row items-center gap-4 p-6 md:p-8">
                    <div className="w-28 h-28 flex-none rounded-xl bg-gradient-to-br from-indigo-600 to-pink-600 flex items-center justify-center text-3xl font-extrabold">
                        <img src={LogoImage} alt="Guild Logo" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold">{guild.name}</h1>
                        <p className="text-sm opacity-80">{guild.server}</p>
                        <p className="text-sm opacity-80">{guild.realm} • {guild.faction} • {guild.progress}</p>
                        <p className="mt-2 italic text-slate-300">“{guild.motto}”</p>
                    </div>
                    <div className="flex items-center gap-3 mt-4 md:mt-0">
                        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md font-semibold">
                            {lang === "hu" ? "HU" : "EN"}
                        </button>
                    </div>
                </header>

                <main className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <section className="lg:col-span-2 space-y-6">
                        <div className="bg-slate-800/60 rounded-xl p-4">
                            <h2 className="font-semibold text-xl">{t.news}</h2>
                            <ul className="mt-3 space-y-3">
                                {guild.news.map(n => (
                                    <li key={n.id} className="p-3 bg-slate-900/40 rounded-md">
                                        <strong>{n.title}</strong>
                                        <div className="text-sm opacity-80">{n.excerpt}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-800/60 rounded-xl p-4">
                            <h2 className="font-semibold text-xl">{t.roster}</h2>
                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {guild.roster.map(m => (
                                    <div key={m.name} className="p-3 bg-slate-900/40 rounded-md flex items-center justify-between">
                                        <div>
                                            <div className="font-medium">{m.name} <span className="text-sm opacity-70">• {m.cls}</span></div>
                                            <div className="text-xs opacity-70">{m.role} • ilvl {m.ilvl} • GS {m.gs} </div>
                                        </div>
                                        <div className="text-sm font-semibold">{m.role === 'Healer' ? '💚' : m.role === 'Tank' ? '🛡️' : '⚔️'}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-800/60 rounded-xl p-4">
                            <h2 className="font-semibold text-xl">{t.apply}</h2>
                            <p className="mt-2 text-sm opacity-80">{t.applyText} <a id="apply" href="https://discord.gg/JDPXapVMrv" target={'_blank'} className="underline">{t.applyHere}</a>.</p>
                        </div>
                    </section>

                    <aside className="space-y-6">
                        <div className="bg-slate-800/60 rounded-xl p-4">
                            <h3 className="font-semibold">{t.events}</h3>
                            <ul className="mt-3 space-y-2 text-sm opacity-90">
                                {guild.events.map((e,i) => (
                                    <li key={i} className="p-2 rounded-md bg-slate-900/30">{e.date} — {e.time} {e.zone} <div className="opacity-80">{e.note}</div></li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-800/60 rounded-xl p-4">
                            <h3 className="font-semibold">{t.quickLinks}</h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li><a href="https://discord.gg/JDPXapVMrv" target={'_blank'} className="underline">Discord</a></li>
                                <li><a href="https://discord.com/channels/1438064852160479336/1439443065726177351" target={'_blank'} className="underline">{t.rules}</a></li>
                                <li><a href="#logs" className="underline">{t.logs}</a></li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/60 rounded-xl p-4 text-center">
                            <h3 className="font-semibold">{t.strength}</h3>
                            <div className="mt-3 text-3xl font-bold">{guild.roster.length * 10}%</div>
                            <div className="text-sm opacity-80">{t.engagement}</div>
                        </div>
                    </aside>
                </main>

                <footer className="p-6 md:p-8 text-center text-sm opacity-70">Wrath of the Lich King</footer>
            </div>
        </div>
    );
}
