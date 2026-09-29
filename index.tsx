import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

const PlayIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M7 4.5v15l13-7.5z" />
  </svg>
)

const ArrowBack = () => (
  <svg class="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
)

const ArrowOut = () => (
  <svg class="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M17 7L7 17M8 7h9v9" />
  </svg>
)

app.get('/', (c) => {
  return c.render(
    <>
      <header class="hdr" id="hdr">
        <div class="wrap">
          <a class="brand" href="#top"><i aria-hidden="true"></i>أحمد الطراوي</a>
          <nav class="nav" id="nav">
            <a href="#about">الخدمات</a>
            <a href="#clients">العملاء</a>
            <a href="#campaigns">الحملات</a>
            <a href="#content">المحتوى</a>
            <a href="#results">النتائج</a>
            <a href="#plan">الخطة</a>
            <a href="#contact">تواصل</a>
          </nav>
          <button class="burger" id="burger" aria-label="القائمة" aria-expanded="false">
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div class="drawer" id="drawer" aria-hidden="true">
        <a href="#about">الخدمات</a>
        <a href="#clients">العملاء</a>
        <a href="#campaigns">الحملات</a>
        <a href="#content">المحتوى</a>
        <a href="#results">النتائج</a>
        <a href="#plan">الخطة</a>
        <a href="#contact">تواصل</a>
      </div>

      <main id="top">
        {/* HERO */}
        <div class="hero grain" data-screen-label="01 Hero">
          <div class="glow" aria-hidden="true"></div>
          <div class="wrap">
            <div>
              <h1>
                <span class="ln"><span>أحمد</span></span>
                <span class="ln"><span>الطراوي</span></span>
              </h1>
              <div class="role fade-up" style="animation-delay:.45s">أخصائي تسويق</div>
              <p class="lead fade-up" style="animation-delay:.55s">
                أكثر من 6 سنوات في أسواق السعودية والإمارات ومصر، أبني الحملات وأقيس أداءها بالأرقام.
              </p>
              <div class="cta fade-up" style="animation-delay:.65s">
                <a class="btn" href="#results">شاهد النتائج<ArrowBack /></a>
                <a class="btn ghost" href="#contact">تواصل معي</a>
              </div>
              <div class="stats fade-up" style="animation-delay:.8s">
                <div><b>6+</b><span>سنوات خبرة</span></div>
                <div><b>3</b><span>أسواق</span></div>
              </div>
            </div>
            <div class="collage" id="collage" aria-hidden="true">
              <div class="frame" data-par="-0.04"></div>
              <figure class="c2" data-par="0.06"><img src="assets/a10.jpg" alt="" /></figure>
              <figure class="c3" data-par="0.1"><img src="assets/a12.jpg" alt="" /></figure>
              <figure class="c1" data-par="-0.02"><img src="assets/a08.jpg" alt="" /></figure>
            </div>
          </div>
          <div class="scrollcue" aria-hidden="true"></div>
        </div>

        {/* SERVICES */}
        <section id="about" data-screen-label="02 Services">
          <div class="wrap">
            <div class="sh"><h2 class="rv">الخدمات</h2><p class="rv d1">من التخطيط إلى التقرير.</p></div>
            <div class="svc">
              <div class="rv">الخطط والحملات<small>تطوير وتنفيذ</small></div>
              <div class="rv d1">القنوات الرقمية<small>إعلانات مدفوعة وحسابات اجتماعية</small></div>
              <div class="rv d2">تطوير المحتوى<small>أفكار ومنشورات وفيديو</small></div>
              <div class="rv">دراسة الأسواق<small>فهم الجمهور والسوق</small></div>
              <div class="rv d1">تحليل المنافسين<small>فجوات وفرص</small></div>
              <div class="rv d2">قياس الأداء<small>تقارير تدعم القرار</small></div>
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section id="clients" style="padding-top:0" data-screen-label="03 Clients">
          <div class="wrap">
            <div class="sh"><h2 class="rv">علامات عملت معها</h2><p class="rv d1">شركات من السعودية والإمارات ومصر.</p></div>
            <div class="logos">
              <figure class="rv" data-n="Vodafone" style="background:#ffffff"><img alt="Vodafone" src="assets/a00.png" /></figure>
              <figure class="rv d1" data-n="Hola Healthy" style="background:#fdfdfd"><img alt="Hola Healthy" src="assets/a01.png" /></figure>
              <figure class="rv d2" data-n="Boxoit" style="background:#000000"><img alt="Boxoit" src="assets/a02.png" /></figure>
              <figure class="rv d3" data-n="Kcal" style="background:#102f22"><img alt="Kcal" src="assets/a03.png" /></figure>
              <figure class="rv" data-n="C." style="background:#2c2c2c"><img alt="C." src="assets/a04.png" /></figure>
              <figure class="rv d1" data-n="Boyot" style="background:#ffffff"><img alt="Boyot" src="assets/a05.png" /></figure>
              <figure class="rv d2" data-n="Vase" style="background:#244b48"><img alt="Vase" src="assets/a06.png" /></figure>
              <figure class="rv d3" data-n="Feed'z" style="background:#b8513c"><img alt="Feed'z" src="assets/a07.png" /></figure>
            </div>
            <div class="mk rv">
              <span class="tag">السعودية</span>
              <span class="tag">الإمارات</span>
              <span class="tag">مصر</span>
            </div>
          </div>
        </section>

        {/* CAMPAIGNS */}
        <section id="campaigns" class="dark grain" data-screen-label="04 Campaigns">
          <div class="wrap">
            <div class="sh"><h2 class="rv">الحملات التسويقية</h2></div>
            <div class="rule rv"></div>
            <div class="reel">
              <div class="card rv">
                <div class="media rv-img">
                  <video playsinline preload="none" poster="assets/a08.jpg" src="assets/a09.mp4"></video>
                  <button class="play" aria-label="تشغيل"><i><PlayIcon /></i></button>
                </div>
                <div class="cap"><span class="n">ڤودافون</span><span class="tag">مصر</span></div>
              </div>
              <div class="card rv d1">
                <div class="media rv-img">
                  <video playsinline preload="none" poster="assets/a10.jpg" src="assets/a11.mp4"></video>
                  <button class="play" aria-label="تشغيل"><i><PlayIcon /></i></button>
                </div>
                <div class="cap"><span class="n">ڤازا</span><span class="tag">السعودية</span></div>
              </div>
              <div class="card rv d2">
                <div class="media rv-img">
                  <video playsinline preload="none" poster="assets/a12.jpg" src="assets/a13.mp4"></video>
                  <button class="play" aria-label="تشغيل"><i><PlayIcon /></i></button>
                </div>
                <div class="cap"><span class="n">فيدز</span><span class="tag">السعودية</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section id="content" data-screen-label="05 Content">
          <div class="wrap">
            <div class="sh"><h2 class="rv">صناعة المحتوى</h2></div>
            <div class="rule rv"></div>
            <div class="content-grid">
              <div class="card rv">
                <div class="media rv-img"><img class="p" alt="فيدز" src="assets/a14.jpg" /></div>
                <div class="cap"><span class="n">فيدز</span><span class="tag">السعودية</span></div>
              </div>
              <div class="card rv d1">
                <div class="media rv-img"><img class="p" alt="هولا" src="assets/a15.jpg" /></div>
                <div class="cap"><span class="n">هولا</span><span class="tag">السعودية</span></div>
              </div>
              <div class="card rv d2">
                <div class="media rv-img">
                  <video playsinline preload="none" poster="assets/a16.jpg" src="assets/a17.mp4"></video>
                  <button class="play" aria-label="تشغيل"><i><PlayIcon /></i></button>
                </div>
                <div class="cap"><span class="n" style="font-family:var(--f-display)">Beurre</span><span class="tag">الإمارات</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" class="sand" data-screen-label="06 Results">
          <div class="wrap">
            <div class="sh">
              <h2 class="rv">نتائج الحملات المدفوعة</h2>
              <p class="rv d1">أرقام من حسابات إعلانية فعلية. اضغط على الصورة للتكبير.</p>
            </div>
            <div class="res">
              <div class="pn rv">
                <h3>سناب شات</h3>
                <div class="k"><div><b>99.9 ألف</b><span>ر.س مبيعات</span></div><div><b>233</b><span>عملية شراء</span></div></div>
                <div class="shotwrap"><img class="shot" alt="نتائج سناب شات" src="assets/a18.jpg" /></div>
              </div>
              <div class="pn rv d1">
                <h3>تيك توك</h3>
                <div class="k"><div><b>10.57x</b><span>عائد الإنفاق</span></div><div><b>225 ألف</b><span>ر.س مبيعات</span></div></div>
                <div class="shotwrap"><img class="shot" alt="نتائج تيك توك" src="assets/a19.jpg" /></div>
              </div>
              <div class="pn f rv">
                <div>
                  <h3>الوصول والتكلفة</h3>
                  <div class="k">
                    <div><b>14.6 مليون</b><span>ظهور</span></div>
                    <div><b>2.19</b><span>ر.س لكل ألف ظهور</span></div>
                    <div><b>32.1 ألف</b><span>ر.س إنفاق</span></div>
                  </div>
                </div>
                <div class="shotwrap"><img class="shot" alt="مؤشرات الظهور" src="assets/a20.jpg" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* PLAN */}
        <section id="plan" class="plan-sec grain" data-screen-label="07 Plan">
          <div class="big" aria-hidden="true">Dreevo</div>
          <div class="wrap">
            <div class="plan">
              <div>
                <h2 class="rv">الخطة التسويقية</h2>
                <p class="rv d1">استراتيجية كاملة لشركة Dreevo للتوصيل والخدمات اللوجستية.</p>
                <ul class="rv d2">
                  <li>تحليل الوضع الحالي وSWOT</li>
                  <li>تحليل المنافسين والتموضع</li>
                  <li>شرائح العملاء المستهدفة</li>
                  <li>عرض القيمة وخطة المحتوى</li>
                </ul>
                <a class="btn rv d3" href="https://drive.google.com/file/d/10t4wTSXU1yLYcR-jjfkP4P-LR5njnHDb/view" target="_blank" rel="noopener">افتح الملف<ArrowOut /></a>
              </div>
              <div class="ph rv d2">
                <h3>خطة الإطلاق</h3>
                <div class="step">الإطلاق التجريبي<b>15 يوم</b></div>
                <div class="step">مرحلة الوعي<b>30 يوم</b></div>
                <div class="step">مرحلة التموضع<b>30 يوم</b></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" class="contact dark grain" data-screen-label="08 Contact">
          <div class="wrap">
            <div class="ct">
              <h2 class="rv">لنعمل <em>معًا</em></h2>
              <div class="links rv d2">
                <a class="x" href="tel:+966556468773">+966 55 646 8773</a>
                <a class="x" href="mailto:ahmedeltrawy40@gmail.com">ahmedeltrawy40@gmail.com</a>
              </div>
            </div>
          </div>
          <footer>
            <div class="wrap">
              <span>أحمد الطراوي · أخصائي تسويق</span>
              <a class="totop" href="#top" aria-label="للأعلى">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
              </a>
            </div>
          </footer>
        </section>
      </main>

      <div id="lb" role="dialog" aria-label="عرض الصورة"><img alt="" /></div>

      <script src="/static/app.js"></script>
    </>
  )
})

export default app
