import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Eye,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Printer,
  X,
} from 'lucide-react';
import { DoorMark } from '../components/DoorMark';
import { categories, formatExamplePrice, showcaseProducts, type ShowcaseProduct } from '../data/showcase';
import { photos, store } from '../data/store';
import { formatPhone, telLink, waLink } from '../lib/format';

type ContactSettings = { whatsapp: string; phone: string };

const settings: ContactSettings = {
  whatsapp: store.whatsappDigits,
  phone: store.phoneDigits,
};

export function Loja() {
  return (
    <div className="loja">
      <Header settings={settings} />
      <Hero />
      <Products settings={settings} />
      <Catalog settings={settings} />
      <Quote />
      <History />
      <Visit settings={settings} />
      <Footer settings={settings} />
    </div>
  );
}

function Header({ settings }: { settings: ContactSettings }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: '#inicio', label: 'Início' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#historia', label: 'Nossa história' },
    { href: '#chegar', label: 'Contato' },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#inicio" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><DoorMark /></span>
          <span>Casa das Portas<small>Junqueirópolis · SP</small></span>
        </a>
        <nav className={`site-nav${menuOpen ? ' is-visible' : ''}`} id="site-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
        </nav>
        <a className="header-wa" href={waLink(settings.whatsapp, 'Olá, Casa das Portas. Gostaria de um orçamento.')} target="_blank" rel="noreferrer">
          <MessageCircle size={16} /> <span>Fale com a loja</span>
        </a>
        <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="site-nav" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio" style={{ backgroundImage: `linear-gradient(90deg, rgba(23, 34, 25, .91) 0%, rgba(23, 34, 25, .73) 42%, rgba(23, 34, 25, .2) 100%), url("${photos.hero}")` }}>
      <div className="hero-inner page-width">
        <p className="hero-eyebrow"><span /> JUNQUEIRÓPOLIS, SÃO PAULO</p>
        <h1>Casa das<br />Portas<span>.</span></h1>
        <p className="hero-description">Portas, janelas e materiais para sua casa e sua obra, com atendimento de balcão.</p>
        <div className="hero-actions">
          <a className="hero-primary" href="#produtos">Conheça os produtos <ArrowDown size={16} /></a>
          <a className="hero-secondary" href="#historia">Nossa história <ArrowRight size={16} /></a>
        </div>
      </div>
      <p className="hero-image-credit">Imagem ilustrativa</p>
    </section>
  );
}

function Products({ settings }: { settings: ContactSettings }) {
  const [category, setCategory] = useState<(typeof categories)[number]>('Todos');
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<ShowcaseProduct | null>(null);
  const filtered = category === 'Todos' ? showcaseProducts : showcaseProducts.filter((product) => product.category === category);
  const visible = category === 'Todos' && !showAll ? filtered.slice(0, 8) : filtered;

  return (
    <section className="products-section" id="produtos">
      <div className="page-width">
        <div className="products-heading">
          <div>
            <p className="kicker">PARA SUA CASA E SUA OBRA</p>
            <h2>Encontre o que<br /><em>você procura.</em></h2>
          </div>
          <p>Portas, janelas, esquadrias e outros materiais para sua construção ou reforma.</p>
        </div>

        <div className="demo-note" role="note">
          <strong>Vitrine de demonstração.</strong> Imagens, modelos e valores são exemplos, não ofertas da loja. Confirme preço e disponibilidade no balcão.
        </div>

        <div className="products-toolbar">
          <div className="category-tabs" role="group" aria-label="Filtrar produtos por categoria">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={category === item ? 'active' : ''}
                aria-pressed={category === item}
                onClick={() => { setCategory(item); setShowAll(false); }}
              >
                {item}
              </button>
            ))}
          </div>
          <span className="result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'exemplo' : 'exemplos'}</span>
        </div>

        <div className="product-grid">
          {visible.map((product) => (
            <article key={product.id} className="showcase-product">
              <button className="product-visual" type="button" onClick={() => setSelected(product)} aria-label={`Visualizar ${product.name}`}>
                <img src={product.images[0].src} alt={product.images[0].alt} loading="lazy" />
                <span><Eye size={15} /> Visualizar</span>
              </button>
              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="product-description">{product.summary}</p>
                <div className="product-bottom">
                  <div className="product-price"><span>PREÇO DE EXEMPLO</span><strong>{formatExamplePrice(product.examplePrice)}</strong></div>
                  <button type="button" className="product-details" onClick={() => setSelected(product)} aria-label={`Ver detalhes de ${product.name}`}>
                    Detalhes <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {category === 'Todos' && !showAll && filtered.length > visible.length && (
          <div className="more-products">
            <button type="button" className="outline-button" onClick={() => setShowAll(true)}>Ver mais exemplos <ArrowDown size={16} /></button>
          </div>
        )}
        <p className="products-footnote">Fotos ilustrativas. Preços simulados, sujeitos à confirmação com a loja.</p>
      </div>
      {selected && <ProductDialog product={selected} settings={settings} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProductDialog({ product, settings, onClose }: { product: ShowcaseProduct; settings: ContactSettings; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    // The browser closes a removed dialog; closing during Strict Mode replay fires onClose prematurely.
  }, []);

  const message = `Olá! Vi o exemplo de ${product.name} no site e gostaria de consultar modelos disponíveis e preço.`;

  return (
    <dialog
      className="product-dialog"
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
      aria-labelledby="product-dialog-title"
      aria-describedby="product-dialog-description"
    >
      <button type="button" className="dialog-close" aria-label="Fechar detalhes" onClick={() => dialogRef.current?.close()}><X size={21} /></button>
      <div className="dialog-layout">
        <div className="dialog-gallery">
          <img className="dialog-main-image" src={product.images[imageIndex].src} alt={product.images[imageIndex].alt} />
          {product.images.length > 1 && (
            <div className="dialog-thumbnails" role="group" aria-label="Imagens de referência">
              {product.images.map((image, index) => (
                <button type="button" key={image.src} aria-label={`Ver referência ${index + 1}`} aria-pressed={imageIndex === index} className={imageIndex === index ? 'active' : ''} onClick={() => setImageIndex(index)}>
                  <img src={image.src} alt="" />
                </button>
              ))}
            </div>
          )}
          <p className="dialog-image-note">Imagens de referência, não necessariamente do mesmo modelo.</p>
        </div>
        <div className="dialog-copy">
          <p className="kicker">{product.category.toUpperCase()} / MODELO ILUSTRATIVO</p>
          <h2 id="product-dialog-title">{product.name}</h2>
          <p className="dialog-summary">{product.summary}</p>
          <div className="dialog-price"><span>PREÇO SIMULADO</span><strong>{formatExamplePrice(product.examplePrice)}</strong></div>
          <p className="dialog-disclaimer">Este valor é apenas um exemplo para a prévia. Não é uma oferta nem representa o preço da loja.</p>
          <p className="dialog-description" id="product-dialog-description">{product.description}</p>
          <a className="btn-primary dialog-cta" href={waLink(settings.whatsapp, message)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Consultar no WhatsApp</a>
          <p className="dialog-help">Medidas, modelos e disponibilidade devem ser confirmados com a loja.</p>
        </div>
      </div>
    </dialog>
  );
}

function Catalog({ settings }: { settings: ContactSettings }) {
  const printCatalog = () => {
    document.body.classList.add('print-catalog');
    const clear = () => document.body.classList.remove('print-catalog');
    window.addEventListener('afterprint', clear, { once: true });
    window.print();
    window.setTimeout(clear, 3000);
  };

  return (
    <section className="catalog" id="catalogo">
      <div className="page-width catalog-content">
        <div>
          <p className="kicker">CATÁLOGO PARA CONSULTA</p>
          <h2>Prefere ver em uma lista?</h2>
          <p>Imprima ou salve em PDF os exemplos da vitrine para consultar depois.</p>
        </div>
        <button type="button" className="outline-button" onClick={printCatalog}><Printer size={17} /> Imprimir catálogo</button>
      </div>
      <div className="catalog-print page-width">
        <h2>Casa das Portas | Catálogo de exemplo</h2>
        <p>{store.address.full} · {formatPhone(settings.phone)}</p>
        <p><strong>DEMONSTRAÇÃO: modelos, imagens e preços são simulados. Não são ofertas da loja.</strong></p>
        <table>
          <thead><tr><th>Exemplo de produto</th><th>Categoria</th><th>Preço simulado</th></tr></thead>
          <tbody>{showcaseProducts.map((product) => <tr key={product.id}><td>{product.name}</td><td>{product.category}</td><td>{formatExamplePrice(product.examplePrice)}</td></tr>)}</tbody>
        </table>
        <p>Consulte a loja para saber modelos, disponibilidade e valores reais.</p>
      </div>
    </section>
  );
}

function Quote() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('Junqueirópolis');
  const [product, setProduct] = useState(showcaseProducts[0].name);
  const [qty, setQty] = useState('1');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [notes, setNotes] = useState('');

  const submit = (event: FormEvent) => {
    event.preventDefault();
    // Em demonstração, nenhum WhatsApp real é aberto. O aviso global explica.
    window.dispatchEvent(new CustomEvent('demo:contact'));
  };

  return (
    <section className="quote-section" id="orcamento">
      <div className="page-width quote-inner">
        <div className="quote-copy">
          <p className="kicker light-kicker">FALE COM A LOJA</p>
          <h2>Vamos fazer<br /><em>seu orçamento?</em></h2>
          <p>Conte o que você procura. Se já souber as medidas, envie junto para facilitar o atendimento.</p>
          <span>A medida informada é uma referência e não substitui a conferência no local.</span>
        </div>
        <form className="quote-form" onSubmit={submit}>
          <div className="quote-form-head"><strong>Peça pelo WhatsApp</strong><span>Preencha os dados abaixo</span></div>
          <label>Seu nome<input value={name} onChange={(event) => setName(event.target.value)} required autoComplete="name" placeholder="Como podemos chamar você?" /></label>
          <label>Cidade<input value={city} onChange={(event) => setCity(event.target.value)} required /></label>
          <label>O que você procura?<select value={product} onChange={(event) => setProduct(event.target.value)}>{showcaseProducts.map((item) => <option key={item.id}>{item.name}</option>)}<option>Outro produto</option></select></label>
          <label>Quantidade<input type="number" min="1" value={qty} onChange={(event) => setQty(event.target.value)} required /></label>
          <label>Largura do vão (cm)<input value={width} onChange={(event) => setWidth(event.target.value)} inputMode="decimal" placeholder="Ex.: 80" /></label>
          <label>Altura do vão (cm)<input value={height} onChange={(event) => setHeight(event.target.value)} inputMode="decimal" placeholder="Ex.: 210" /></label>
          <label className="span-2">Observações<textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={3} placeholder="Modelo, acabamento ou outra informação" /></label>
          <div className="quote-actions span-2"><button type="submit" className="btn-primary"><MessageCircle size={16} /> Simular pedido</button><p>Demonstração: nenhuma mensagem será enviada.</p></div>
        </form>
      </div>
    </section>
  );
}

function History() {
  return (
    <section className="history-section" id="historia">
      <div className="page-width history-inner">
        <figure className="history-photo">
          <img src={photos.historia} alt="Fachada de uma loja de portas e madeira. Imagem ilustrativa." loading="lazy" />
          <figcaption>Imagem ilustrativa</figcaption>
        </figure>
        <div className="history-copy">
          <p className="kicker">NOSSA HISTÓRIA</p>
          <h2>Uma loja de portas.<br /><em>Muita história por aqui.</em></h2>
          <p>Conhecida em Junqueirópolis como Casa das Portas, a loja faz parte do comércio local e do dia a dia de quem constrói e reforma na região.</p>
          <p>O atendimento é de balcão: uma conversa para entender o que você precisa e ajudar a encontrar o caminho para a sua obra.</p>
          <a className="text-link" href="#chegar">Venha conhecer a loja <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function Visit({ settings }: { settings: ContactSettings }) {
  return (
    <section className="visit-section" id="chegar">
      <div className="page-width visit-inner">
        <div className="visit-copy">
          <p className="kicker">ESTAMOS EM JUNQUEIRÓPOLIS</p>
          <h2>Passe no balcão<br /><em>ou fale com a gente.</em></h2>
          <p>Conte com o atendimento da loja para tirar dúvidas e consultar modelos e valores.</p>
          <div className="visit-details">
            <div><MapPin size={20} /><span><small>ENDEREÇO</small>{store.address.street}, {store.address.number}<br />{store.address.neighborhood} · {store.address.city} - {store.address.state}</span></div>
            <div><Phone size={20} /><span><small>TELEFONE</small><a href={telLink(settings.phone)}>{formatPhone(settings.phone)}</a></span></div>
          </div>
          <a className="btn-primary" href={waLink(settings.whatsapp, 'Olá, Casa das Portas! Gostaria de conversar com a loja.')} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Falar pelo WhatsApp</a>
          <p className="contact-note">Demonstração: telefone, endereço e horário são fictícios.</p>
        </div>
        <div className="map-wrap">
          <iframe title="Mapa ilustrativo da cidade de Junqueirópolis" src={store.mapsEmbed} loading="lazy" />
          <a className="map-link" href={store.mapsLink} target="_blank" rel="noreferrer">Ver mapa da cidade <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

function Footer({ settings }: { settings: { whatsapp: string; phone: string } }) {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <div className="footer-about"><a href="#inicio" className="footer-logo"><DoorMark /> <span>Casa das Portas</span></a><p>Portas, janelas e materiais para sua obra em Junqueirópolis.</p></div>
        <div className="footer-links"><strong>EXPLORE</strong><a href="#produtos">Produtos</a><a href="#historia">Nossa história</a><a href="#chegar">Contato</a></div>
        <div className="footer-links"><strong>FALE COM A LOJA</strong><a href={telLink(settings.phone)}>{formatPhone(settings.phone)}</a><span>Junqueirópolis - SP</span><a href={waLink(settings.whatsapp)} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="page-width footer-bottom"><p>Site de demonstração. Contatos, fotos e preços são fictícios.</p><span>Feito para portfólio</span></div>
    </footer>
  );
}