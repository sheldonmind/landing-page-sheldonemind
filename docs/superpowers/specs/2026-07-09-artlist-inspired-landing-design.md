# Landing page lấy cảm hứng từ Artlist — Bản thiết kế

Ngày: 2026-07-09
Trạng thái: **đã triển khai** (build + lint sạch, đã kiểm chứng ở 1512/1024/430)

## Mục tiêu

Dựng lại landing page SheldonMind sao cho **bố cục, cấu trúc section, nhịp khoảng cách,
ngôn ngữ chuyển động và hành vi responsive** đọc lên giống ngôn ngữ thiết kế của
`https://artlist.io/`, nhưng toàn bộ nội dung là của SheldonMind.

## Không làm / Ràng buộc

- **Không sao chép tài nguyên.** Không lấy text, logo, hình ảnh, font, video hay source code
  từ trang tham chiếu. Font riêng của Artlist (`publicoBanner`, `artlistSans`) được thay bằng
  font đã có sẵn trong `index.html`.
- **Giữ nguyên nút bấm.** `FigmaPrimaryCta.tsx` giữ nguyên hình học (radius 16, px-5 py-4,
  Figtree Medium 18, mũi tên 24px) và màu hiện tại (radial `#0472EF → #7EBDEA → #D3F2E7`,
  viền trong `#32eeff`). Không đổi style, không đổi màu.
- Không giống từng pixel. Trang Artlist đầy footage và copy của họ. Mục tiêu là: người quen
  Artlist nhìn vào sẽ nhận ra cùng một ngôn ngữ thiết kế.

### Hệ quả về màu nhấn

Artlist lấy màu vàng gold làm gốc cho mọi hiệu ứng glow, viền, badge và trạng thái hover.
Nút của SheldonMind là xanh dương → cyan. Giữ nút của SheldonMind đồng nghĩa phải chuyển các
xử lý phụ đó sang `#32eeff` / `#0472EF`, thay vì để lại những điểm nhấn gold lạc lõng trên
trang. Đây là điểm lệch có chủ đích so với bản tham chiếu, do ràng buộc "giữ nút của tôi".

### Trùng copy có sẵn

`PricingTeaserSection.tsx` đã có sẵn tiêu đề "Find your perfect plan." — trùng nguyên văn với
tiêu đề pricing của Artlist. Đây là copy có sẵn của SheldonMind, đã commit trong repo này, nên
được giữ lại. Không phải là sao chép từ trang tham chiếu.

## Số liệu đo được từ trang tham chiếu

Toàn bộ phần dưới được đọc trực tiếp từ trang live, không phải nhớ lại.

| Thuộc tính | Giá trị |
| --- | --- |
| Nền trang | `#101010` |
| Container | `max-width: 1440px` |
| Section sticky | không có |
| Stack animation | Framer Motion + IntersectionObserver |
| Chiều cao document @1512 | 7821px, 12 section |

Thang chữ tại viewport 1512px:

| Vai trò | Font | Cỡ | Weight | Tracking | Line-height |
| --- | --- | --- | --- | --- | --- |
| Hero h1 + hầu hết tiêu đề section | `publicoBanner` serif | 77.8px (≈`5.14vw`, fluid) | 300 | −0.022em | 0.88 |
| Tiêu đề Studio (điểm gãy sans duy nhất) | `artlistSans` | 80px | 400 | −0.04em | ~1.0 |
| Eyebrow của section | `artlistSans` | 18px | 500 | −0.01em | ~1.2 |

Vị trí top của các section (đo được): `0, 664, 1452, 2416, 2638, 3673, 4207, 5060, 5794, 6388`.

## Thay thế font

| Bản gốc | Của ta | Lý do |
| --- | --- | --- |
| `publicoBanner` 300 | **Source Serif 4** 400 | Serif transitional tương phản vừa, sát chất chữ Publico Banner hơn Playfair. Thêm ~18 kB. Fallback: Playfair Display → Georgia. |
| `artlistSans` | **Figtree** | Đã load sẵn, và cũng chính là font trong Figma token của app này. |

Đo được sau khi triển khai, tại viewport 1512px: `font-size` 77.72px (gốc 77.79px),
`line-height` 68.39px (gốc 68.45px), `letter-spacing` −1.71px (gốc −1.68px).

Token serif display: `font-size: clamp(40px, 5.14vw, 82px); line-height: 0.88; letter-spacing: -0.022em;`

## Đặc tả chuyển động

**Đo lại lần hai (bản đầu của mục này đã SAI — xem "Sai lầm lớn" bên dưới).**

Trang tham chiếu **không có bất kỳ animation nào theo scroll**. Đo trực tiếp:
`document.getAnimations()` trả về `0`, `prefers-reduced-motion` là `false`, mọi section giữ
`opacity: 1` và `transform: none` cả khi ngoài màn hình lẫn khi đã vào khung nhìn. Dải logo
thương hiệu **đứng yên**. Không dùng thư viện animation nào.

Chỉ có hai thứ chuyển động: **transition khi hover** (398 phần tử) và **accordion FAQ**.

Vì vậy dự án này **không dùng Framer Motion**. `dependencies` chỉ còn `react`, `react-dom`.

1. **Nhoè hai đầu tiêu đề** — thứ tôi từng tưởng nhầm là reveal. `::before` phủ
   `linear-gradient(to right, <màu nền>, transparent)` lên đầu trái, `::after` phủ chiều
   ngược lại lên đầu phải. Rộng 12% (45% từ `md`), lệch ra ngoài 3% (20% từ `md`). Hoàn toàn
   tĩnh. Heading phải là `inline-block` để veil bám bề rộng chữ, không phải bề rộng container.
2. **Thanh kính hero** — 4 lớp chồng, đo từ bản gốc:
   `backdrop-blur(4px)` + filter nhiễu → `bg rgba(0,0,0,0.05)` + viền `0.5px rgba(255,255,255,0.6)`
   → 6 lớp `inset` box-shadow → nội dung. Nền **không trong suốt**.
   Bản gốc nhuộm lớp inset trên cùng màu vàng; của ta dùng cyan `#32EEFF` của app.
3. **Accordion FAQ** — `grid-template-rows: 0fr → 1fr`, CSS thuần, không đo chiều cao bằng JS.
4. **Card video phát khi hover** — `<video>` phát khi con trỏ vào, reset khi rời đi.
5. **Nav** — trong suốt khi nằm trên hero; thêm `backdrop-blur` + viền đáy mảnh sau khi scroll ~80px.
6. **Marquee logo** — *lệch có chủ đích*. Dải của bản gốc đứng yên; của ta trượt ngang vì đây
   là hành vi sẵn có của app (`Section1.tsx` cũ) và 9 logo không vừa một hàng tĩnh.
   Đây là animation duy nhất trên trang.

Tất cả trở về trạng thái tĩnh khi `prefers-reduced-motion: reduce`.

## Sơ đồ section

Mười hai vị trí, ánh xạ một-đối-một với cấu trúc của bản tham chiếu. Nội dung lấy từ các
component hiện có, không bịa ra.

| # | Vai trò bên tham chiếu | Section SheldonMind | Nguồn nội dung |
| --- | --- | --- | --- |
| 0 | Nav cố định | Nav: Feature / Gallery / Pricing / FAQ / Contact + CTA hiện có | `SiteNav.tsx` (sửa lỗi gõ `FQA` → `FAQ`) |
| 1 | Hero video + thanh pill model | "Find, Create, Generate. Your AI Journey Starts Here." + thanh pill | `HeroSection.tsx`, `public/*-warp.png` |
| 2 | Scroller Explore Apps | "Explore what you can build" — scroller card use-case | nhãn trong `visualizeConstants.ts` |
| 3 | Dải logo thương hiệu | Marquee logo model | `public/Logo Fullname-*.png` |
| 4 | AI Toolkit | "Multi-Model. Cross-Platform. Pure Intelligence." + 4 card tính năng + mock sản phẩm | `Section1.tsx` |
| 5 | Scroller model | Card model: GPT, Claude, Gemini, Grok, DeepSeek, Mistral, Qwen, Perplexity, MiniMax | `aiTools` trong `Section1.tsx` |
| 6 | Artlist Studio (tiêu đề **sans**) | "Video Studio" — T2V / I2V / V2V, badge `COMING SOON`, glow | `VisualizeBentoGrid.tsx` |
| 7 | 50M+ creators | "Why creators choose SheldonMind" — checklist ✓ trên nền glow radial | mới, dựa trên dữ kiện sản phẩm |
| 8 | Ô danh mục stock | Gallery — Create Image / Upscale / Motion Control / Mixed Media, nhãn serif nghiêng | `visualizeConstants.ts` |
| 9 | Find your perfect plan | Pricing — trả theo dùng, cột Creators / Teams | `PricingTeaserSection.tsx` |
| 10 | Dải CTA | Panel video bo góc full-width + CTA giữa | `public/Create.mp4` |
| 11 | FAQ | Accordion, tiêu đề serif lớn căn trái | `SiteFaq.tsx` |
| 12 | Footer lớn | Product / Company / Get in Touch + social + thanh pháp lý | `SiteFooter.tsx` |

### Nội dung section 7 (section mới duy nhất)

Các mục checklist, rút ra từ những điều đã được khẳng định ở nơi khác trong repo:

- Mọi model lớn trong một workspace — không phải chuyển tab
- Trả theo mức dùng — credit không hết hạn, không cần đăng ký gói
- Chat, ảnh và video dùng chung một số dư credit

## Kế hoạch media

Hiện có bốn file `.mp4`: `Create.mp4`, `Mixed media.mp4`, `Motion control.mp4`,
`Snowboarder Rotates Video.mp4`. Các vị trí media còn lại được lấp bằng **hình ảnh sinh bằng
code** — lưới gradient radial/conic bằng CSS và một trường hạt vẽ trên canvas, lấy tông
`#0472EF → #32eeff`. Không dùng stock footage, không sao chép gì.

Phân bổ vị trí:

| Vị trí | Media |
| --- | --- |
| Nền hero | `Snowboarder Rotates Video.mp4` |
| §2 card use-case | PNG có sẵn + nền gradient mesh |
| §6 mock Video Studio | `Motion control.mp4` xếp lớp trên các panel UI |
| §8 ô Gallery | `Create Img.png`, `Upscale.png`, `Motion control.mp4`, `Mixed media.mp4` |
| §10 dải CTA | `Create.mp4` |

**Lưu ý:** `Motion control.mp4` bị dùng lại ở cả §6 và §8. Bốn clip cho năm vị trí media nên
việc trùng là không tránh khỏi, và sẽ nhận ra được nếu để ý.

## Đặc tả responsive

| Breakpoint | Hành vi |
| --- | --- |
| ≥1440px | Container dừng ở 1440px, lề ngoài giãn ra |
| 1024–1439px | Container co giãn, lề 40px; serif bám `5.14vw` |
| 768–1023px | Lưới tính năng 4→2 cột; ô danh mục 4→2; cột pricing xếp chồng |
| <768px | Tất cả 1 cột; nav thu về dạng sheet; serif chạm sàn 40px; scroller ngang giữ vuốt, bỏ nút mũi tên; card video tự phát, tắt tiếng, inline |

Độ rộng dùng để kiểm chứng: **1512, 1024, 430**.

## Kế hoạch file

Thư mục mới `src/components/artlist/`; `App.tsx` được ghép lại.

| File | Mục đích |
| --- | --- |
| `tokens.ts` | Thang chữ, nhịp khoảng cách, dải màu nhấn |
| `Reveal.tsx` | Bọc fade/slide theo `whileInView` |
| `CharScrubHeading.tsx` | Tiêu đề serif reveal từng ký tự theo scroll |
| `Marquee.tsx` | Dải logo (tách từ `Section1.tsx`) |
| `CardScroller.tsx` | Scroller ngang + mũi tên + chấm phân trang |
| `HoverVideoCard.tsx` | Phát khi con trỏ vào / reset khi rời |
| `SecondaryCta.tsx` | Nút pill viền, lấy tông `#32eeff` (đi kèm nút chính bị đóng băng) |
| `sections/*.tsx` | Mỗi section đánh số ở trên một file |

`FigmaPrimaryCta.tsx` **không bị sửa.**

Loại bỏ: `Section1.tsx`, `VisualizeSection.tsx`, `VisualizeBentoGrid.tsx`,
`VisualizeSectionHeader.tsx`, `AiModelsSection.tsx`, `GallerySection.tsx`,
`PricingTeaserSection.tsx`. Copy và tham chiếu tài nguyên của chúng chuyển sang các section mới.
`MultiAiChatCard.tsx`, `PricingCards.tsx` (đang dùng bởi `/pricing.html`), `SiteFaq.tsx`,
`SiteNav.tsx`, `SiteFooter.tsx` được viết lại tại chỗ, giữ nguyên export.

## Kiểm chứng

1. `npm run build` và `npm run lint` sạch lỗi.
2. Chụp màn hình trang đã build ở 1512 / 1024 / 430 và so từng section với ảnh chụp tham chiếu
   về: thứ tự section, nhịp dọc, cỡ tiêu đề, bo góc card, hành vi tràn của scroller.
3. Xác nhận reveal từng ký tự thực sự chạy mượt theo scroll (lấy mẫu opacity của một glyph ở ba
   vị trí scroll), chứ không nhảy giật.
4. Xác nhận nút chính render đúng hình học và gradient cũ, không đổi.
5. Xác nhận `prefers-reduced-motion: reduce` tắt được scrub và reveal.

## Sai lầm lớn

Tôi đã dựng cả một hiệu ứng **reveal từng ký tự theo scroll** bằng Framer Motion, gọi nó là
"hiệu ứng chữ ký của bản gốc", và tự tin báo cáo là đã tái tạo thành công.

**Bản gốc không hề có hiệu ứng đó.**

Tôi nhìn ảnh chụp thấy `AI Toolki` sáng còn `t` xám, rồi kết luận đó là một vệt quét theo
scroll. Thực tế đó là hai tấm gradient màu nền phủ tĩnh lên hai đầu dòng chữ. Tôi suy diễn
cơ chế từ một khung hình tĩnh, thay vì mở DOM ra kiểm tra — `h2` đó **không có một span con nào**.

Cái giá: một component sai, một dependency 46 kB không cần thiết, và một báo cáo sai sự thật.
Bài học: khi khẳng định "trang X làm hiệu ứng Y bằng cách Z", phải đọc DOM và computed style,
không được suy ra từ ảnh chụp.

## Những lỗi phát hiện khi kiểm chứng

Ghi lại vì cả ba đều không lộ ra qua `build`/`lint`, chỉ thấy khi chạy thật trong trình duyệt.

1. **Reveal từng ký tự không bao giờ sáng hết.** Ánh xạ `[i/N, (i+S)/N]` khiến `S` glyph cuối
   có điểm kết thúc > 1, nên chúng dừng ở opacity ~0.63 và tiêu đề vĩnh viễn xám ở đuôi.
   Sửa: mẫu số phải là `N + S`. Đo lại: glyph cuối đạt đúng 1.0.
2. **Tiêu đề bị ngắt giữa từ** — "choose Sheldon / Mind". Mỗi glyph là một `inline-block`, nên
   trình duyệt được phép xuống dòng giữa hai ký tự. Sửa: bọc mỗi từ trong một
   `inline-block whitespace-nowrap`.
3. **`z-index` âm bị nền trang nuốt mất.** Video hero (`-z-20`) và các vệt glow (`-z-10`) nằm
   dưới nền `bg-background` đục của thẻ gốc, nên không bao giờ hiện. Video vẫn phát
   (`readyState: 4`, `paused: false`) — chỉ là không nhìn thấy. Sửa: dùng `z-0` cho lớp nền và
   `relative z-10` cho nội dung.

Ngoài ra: `Snowboarder Rotates Video.mp4` là **video dọc 1292×1604**, không dùng làm nền hero
tràn viền được — đã chuyển sang `Create.mp4` (1280×720, 15s) và đẩy clip dọc vào ô gallery vuông.
Các `*-warp.png` vốn đã là chip có sẵn viền, nên bỏ lớp pill bao ngoài để tránh khung-trong-khung.

## Kiểm chứng đã chạy

- `npm run build` và `npm run lint`: sạch.
- Chạy thật ở 1512 / 1024 / 430: không tràn ngang ở cấp trang tại bất kỳ độ rộng nào.
- Scrub được lấy mẫu ở 5 vị trí scroll: glyph đầu đạt 1.0 khi glyph cuối còn 0.25 → đúng là
  quét trái sang phải, không phải nhảy giật; mọi glyph kết thúc ở 1.0.
- Không còn từ nào bị ngắt giữa chừng trong các tiêu đề serif.
- Nút chính: `border-radius: 16px`, `padding: 16px 20px` — nguyên vẹn, không đụng tới.
- `/pricing.html` vẫn chạy sau khi nav chuyển sang `fixed`.
