import{d as m,c as n,a as t,t as s,u as l,h as a,n as c,F as p,r as x,b as u,e as b,o as r,_ as g}from"./index-DUZROkuO.js";const f={dir:"rtl",class:"relative z-10 mx-auto w-full max-w-5xl px-6 pb-10 pt-20 text-right md:px-10 md:pb-14"},y={class:"hero-in font-display text-6xl font-black leading-[0.9] text-white md:text-8xl",style:{"animation-delay":"0.15s","text-shadow":"0 10px 40px rgba(0, 0, 0, 0.35)"}},_={class:"hero-in mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg",style:{"animation-delay":"0.28s"}},h={dir:"rtl",class:"mx-auto max-w-5xl px-6 py-10 md:px-10",style:{"border-top":"1px solid var(--border)"}},v={class:"flex flex-wrap gap-x-10 gap-y-4"},k={class:"font-display text-lg font-bold",style:{color:"var(--ink)"}},w={class:"font-mono-label text-sm tracking-wide text-[#1a1a1a]/70"},z={class:"mx-auto max-w-5xl px-6 pb-12 pt-2 md:px-10",style:{"border-top":"1px solid var(--border)"}},S={key:0,class:"info-card mx-auto mt-8 max-w-xl overflow-hidden"},B=["src"],C=m({__name:"HomePage",setup(I){const d=b(()=>{const o=a.latestReleaseSpotifyUrl.match(/open\.spotify\.com\/(track|album)\/([a-zA-Z0-9]+)/);return o?`https://open.spotify.com/embed/${o[1]}/${o[2]}?utm_source=generator`:""});return(o,e)=>(r(),n("main",null,[t("section",{class:"relative flex min-h-[480px] items-end overflow-hidden md:min-h-[640px]",style:c({backgroundImage:`url(${l(a).heroImage})`,backgroundSize:"cover",backgroundPosition:"center 30%"})},[e[1]||(e[1]=t("div",{class:"absolute inset-0",style:{background:`linear-gradient(
            180deg,
            rgba(28, 22, 19, 0.1) 0%,
            rgba(28, 22, 19, 0.55) 55%,
            rgba(28, 22, 19, 0.94) 100%
          )`}},null,-1)),t("div",f,[e[0]||(e[0]=t("p",{class:"hero-in font-mono-label mb-3 text-md tracking-[0.25em]",style:{color:"var(--gold-light)","animation-delay":"0.05s"}}," רוק גלילי משובח ",-1)),t("h1",y,s(l(a).bandName),1),t("p",_,s(l(a).tagline),1)])],4),t("section",h,[e[2]||(e[2]=t("p",{class:"font-mono-label mb-4 text-sm tracking-[0.2em]",style:{color:"var(--rust)"}}," ההרכב ",-1)),t("ul",v,[(r(!0),n(p,null,x(l(a).members,i=>(r(),n("li",{key:i.name,class:"flex flex-col gap-1"},[t("span",k,s(i.name),1),t("span",w,s(i.role),1)]))),128))])]),t("div",z,[d.value?(r(),n("section",S,[e[3]||(e[3]=t("p",{class:"info-card__label font-mono-label",dir:"rtl"},"ריליס אחרון",-1)),t("iframe",{src:d.value,width:"100%",height:"352",style:{border:"none",display:"block",background:`linear-gradient(
              to bottom,
              var(--gold) 0 24px,
              transparent 24px
            )`},allow:`
            autoplay;
            clipboard-write;
            encrypted-media;
            fullscreen;
            picture-in-picture;
          `,loading:"lazy"},null,8,B)])):u("",!0)])]))}}),P=g(C,[["__scopeId","data-v-20fbb11b"]]);export{P as default};
