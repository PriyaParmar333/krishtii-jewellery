import React, { useState } from "react";
import {
  ArrowRight, ChevronDown, Crown, Heart, Instagram, MapPin, Menu,
  Phone, Search, ShieldCheck, Sparkles, Star, X
} from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1600&q=90";

const products = [
  { name: "Rajwada Rani Haar", category: "Heavy Bridal", price: "₹18,500", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=90" },
  { name: "Maharani Kundan Set", category: "Kundan & Polki", price: "₹14,900", img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=90" },
  { name: "Royal Temple Choker", category: "Temple Jewellery", price: "₹11,800", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=90" },
  { name: "Gulab Rani Bangles", category: "Bangles", price: "₹7,500", img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=90" },
  { name: "Mehfil Jhumka Set", category: "Earrings", price: "₹5,900", img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=90" },
  { name: "Noor Bridal Chura", category: "Bangles & Chura", price: "₹8,900", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=90" }
];

const reviews = [
  { text: "The bridal set looked even more beautiful in person. The detailing was so rich and the team helped me choose the perfect combination.", name: "Riya Shah", event: "Bridal Customer", rating: 5 },
  { text: "I rented a complete jewellery set for my sister's wedding. Everything looked premium and the process was very easy.", name: "Kavya Patel", event: "Rental Customer", rating: 5 },
  { text: "Beautiful collection, especially the heavy necklaces and bangles. The styling advice made the whole look come together.", name: "Mansi Joshi", event: "Wedding Guest", rating: 5 }
];

function App() {
  const [menu, setMenu] = useState(false);
  const [category, setCategory] = useState("All");

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  const filtered = category === "All" ? products : products.filter(p => p.category === category);

  return (
    <div className="page">
      <div className="announcement">
        <span>✦ ROYAL BRIDAL COLLECTIONS ✦</span>
        <b>Jewellery available for purchase & rent</b>
        <a href="tel:+919999999999"><Phone size={13}/> +91 99999 99999</a>
      </div>

      <header className="header">
        <button className="logo" onClick={() => go("home")}>
          <span className="logo-crown"><Crown size={22}/></span>
          <span><strong>Krishtii</strong><small>JEWELLERY</small></span>
        </button>

        <nav className={menu ? "nav open" : "nav"}>
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("shop")}>Shop</button>
          <button onClick={() => go("bridal")}>Bridal</button>
          <button onClick={() => go("rent")}>Rent Jewellery</button>
          <button onClick={() => go("reviews")}>Reviews</button>
          <button onClick={() => go("contact")} className="contact-link">Contact</button>
        </nav>

        <div className="header-actions">
          <button onClick={() => go("shop")} aria-label="Search"><Search size={19}/></button>
          <button onClick={() => go("contact")} aria-label="Wishlist"><Heart size={19}/></button>
          <button className="mobile-menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-photo" style={{backgroundImage:`url(${heroImg})`}}></div>
          <div className="hero-shade"></div>
          <div className="hero-content">
            <div className="pill"><Sparkles size={14}/> THE ROYAL EDIT · 2026</div>
            <h1>Make your<br/><em>entrance</em> unforgettable.</h1>
            <p>Heavy bridal jewellery, statement bangles, exquisite kundan and timeless pieces — curated for the woman who deserves to feel like royalty.</p>
            <div className="hero-buttons">
              <button className="primary" onClick={() => go("shop")}>Explore Jewellery <ArrowRight size={17}/></button>
              <button className="secondary" onClick={() => go("rent")}>Rent the royal look</button>
            </div>
            <div className="hero-trust"><span><ShieldCheck size={16}/> Quality checked</span><span><Crown size={16}/> Bridal styling</span><span><Sparkles size={16}/> Rental available</span></div>
          </div>
          <div className="hero-badge"><span>NEW</span><b>Bridal</b><small>Royal Edit</small></div>
        </section>

        <section className="marquee">
          <div>BRIDAL ✦ KUNDAN ✦ POLKI ✦ TEMPLE ✦ BANGLES ✦ JHUMKAS ✦ RENTAL ✦ BRIDAL ✦ KUNDAN ✦ POLKI ✦ TEMPLE ✦ BANGLES ✦</div>
        </section>

        <section id="shop" className="shop section">
          <div className="heading">
            <div><span className="eyebrow">SHOP THE COLLECTION</span><h2>Pieces that <em>own the room.</em></h2></div>
            <p>From dramatic bridal sets to everyday statement pieces, discover jewellery designed to be remembered.</p>
          </div>

          <div className="categories">
            {["All","Heavy Bridal","Kundan & Polki","Temple Jewellery","Bangles","Earrings","Bangles & Chura"].map(c =>
              <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>
            )}
          </div>

          <div className="product-grid">
            {filtered.map((p, i) => (
              <article className="product" key={p.name}>
                <div className="product-image">
                  <img src={p.img} alt={p.name}/>
                  {i < 2 && <span className="new">BESTSELLER</span>}
                  <button className="heart"><Heart size={17}/></button>
                  <div className="quick"><button onClick={() => go("contact")}>Enquire now <ArrowRight size={14}/></button></div>
                </div>
                <div className="product-info">
                  <div><small>{p.category}</small><h3>{p.name}</h3></div>
                  <strong>{p.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="bridal" className="bridal">
          <div className="bridal-image"></div>
          <div className="bridal-content">
            <span className="eyebrow">THE BRIDAL HOUSE</span>
            <h2>Go <em>heavy.</em><br/>Go royal.</h2>
            <p>For the bride who wants a look with presence. Layer a statement haar with a choker, jhumkas, maang tikka and bangles — then let the jewellery do the talking.</p>
            <div className="bridal-points">
              <div><span>01</span><b>Layered Haar Sets</b><small>Rich, statement-making bridal necklaces.</small></div>
              <div><span>02</span><b>Bangles & Chura</b><small>Complete the bridal hands with colour and sparkle.</small></div>
              <div><span>03</span><b>Complete Bridal Styling</b><small>We help you build the full jewellery look.</small></div>
            </div>
            <button className="primary dark" onClick={() => go("contact")}>Book Bridal Styling <ArrowRight size={17}/></button>
          </div>
        </section>

        <section id="rent" className="rent section">
          <div className="rent-head">
            <span className="eyebrow">LOOK LUXURIOUS. RENT SMART.</span>
            <h2>Your dream jewellery<br/><em>doesn't have to be forever.</em></h2>
            <p>Wearing a different heavy set for every wedding is now possible. Select your favourite piece, reserve your dates and return it after your occasion.</p>
            <button className="primary dark" onClick={() => go("contact")}>Check Rental Availability <ArrowRight size={17}/></button>
          </div>
          <div className="rent-card">
            <div className="rent-card-img"></div>
            <div className="rent-card-copy">
              <span>RENTAL FAVOURITE</span>
              <h3>Maharani Wedding Set</h3>
              <p>Heavy necklace · Choker · Jhumkas · Maang tikka · Bangles</p>
              <div><b>From ₹2,500</b><small>per occasion</small></div>
            </div>
          </div>
        </section>

        <section className="why section">
          <div className="center-heading"><span className="eyebrow">WHY KRISHTII</span><h2>Because the little details<br/><em>matter.</em></h2></div>
          <div className="why-grid">
            <div><span>01</span><Crown/><h3>Royal Curation</h3><p>We select pieces for richness, craftsmanship and that unmistakable bridal presence.</p></div>
            <div><span>02</span><Sparkles/><h3>Styling Guidance</h3><p>Not sure what to wear? Our team helps you build a balanced jewellery look.</p></div>
            <div><span>03</span><ShieldCheck/><h3>Rental Ready</h3><p>Carefully checked rental pieces, prepared for your special occasion.</p></div>
            <div><span>04</span><Heart/><h3>Personal Service</h3><p>Come in, try the pieces, compare your options and take your time.</p></div>
          </div>
        </section>

        <section id="reviews" className="reviews">
          <div className="center-heading light-heading"><span className="eyebrow">REAL WOMEN · REAL OCCASIONS</span><h2>They wore it.<br/><em>They loved it.</em></h2></div>
          <div className="review-grid">
            {reviews.map(r => <article className="review" key={r.name}>
              <div className="stars">{Array.from({length:r.rating}).map((_,i)=><Star key={i} size={15} fill="currentColor"/>)}</div>
              <p>“{r.text}”</p>
              <div className="reviewer"><span>{r.name.charAt(0)}</span><div><b>{r.name}</b><small>{r.event}</small></div></div>
            </article>)}
          </div>
        </section>

        <section className="instagram section">
          <div className="heading"><div><span className="eyebrow">FOLLOW THE SPARKLE</span><h2>@krishtii.<em>jewellery</em></h2></div><a href="https://instagram.com/" target="_blank" rel="noreferrer" className="insta-link"><Instagram size={18}/> Follow us <ArrowRight size={15}/></a></div>
          <div className="insta-grid">
            {[
              "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=700&q=85",
              "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=85",
              "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=85",
              "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=700&q=85"
            ].map((img,i)=><div key={i}><img src={img} alt="Krishtii jewellery"/></div>)}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-left">
            <span className="eyebrow">COME TRY IT ON</span>
            <h2>Your next<br/><em>royal moment</em><br/>starts here.</h2>
            <p>Visit the store to explore the collection, discuss your bridal look or reserve jewellery for rent.</p>
            <div className="contact-buttons"><a className="primary" href="tel:+919999999999"><Phone size={17}/> Call us</a><a className="outline" href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={17}/> Instagram</a></div>
          </div>
          <div className="contact-box">
            <div className="contact-row"><span><Phone/></span><div><small>CALL US</small><b>+91 99999 99999</b></div></div>
            <div className="contact-row"><span><MapPin/></span><div><small>VISIT US</small><b>Rajkot, Gujarat</b><p>Mon–Sat · 10:30 AM – 8:30 PM</p></div></div>
            <div className="contact-row"><span><Instagram/></span><div><small>INSTAGRAM</small><b>@krishtii.jewellery</b></div></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo"><span className="logo-crown"><Crown size={20}/></span><div><strong>Krishtii</strong><small>JEWELLERY</small></div></div>
        <span>© 2026 Krishtii Jewellery · Crafted for celebrations.</span>
        <button onClick={() => go("home")}>Back to top ↑</button>
      </footer>

      <a className="floating" href="tel:+919999999999"><Phone size={18}/> Call us</a>
    </div>
  );
}

export default App;