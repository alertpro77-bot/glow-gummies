// Nature's Glow Gummies — High-Converting Landing Page
document.addEventListener('DOMContentLoaded', function() {

    // ===== COUNTDOWN TIMER =====
    let deadline = new Date();
    deadline.setHours(deadline.getHours() + 5);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            deadline = new Date();
            deadline.setHours(deadline.getHours() + 5);
            return;
        }

        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        const pad = (n) => n.toString().padStart(2, '0');

        ['', '2-'].forEach(prefix => {
            const hEl = document.getElementById('cd' + prefix + 'h');
            const mEl = document.getElementById('cd' + prefix + 'm');
            const sEl = document.getElementById('cd' + prefix + 's');
            if (hEl) hEl.textContent = pad(h);
            if (mEl) mEl.textContent = pad(m);
            if (sEl) sEl.textContent = pad(s);
        });
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ===== STOCK TICKER =====
    let stock = 7;
    const stockBadge = document.querySelector('.hook-stock');
    const fpStock = document.querySelector('.fp-stock');

    function updateStockDisplay() {
        if (stockBadge) stockBadge.textContent = 'Only ' + stock + ' Left!';
        if (fpStock) fpStock.innerHTML = '&#128293; Only <strong>' + stock + ' bottles</strong> left at this price';
    }

    function maybeDropStock() {
        if (Math.random() > 0.7 && stock > 2) {
            stock--;
            updateStockDisplay();
            if (stockBadge) {
                stockBadge.style.animation = 'none';
                stockBadge.offsetHeight;
                stockBadge.style.animation = 'stockShake 0.5s ease';
            }
        }
    }

    setInterval(maybeDropStock, Math.random() * 20000 + 20000);

    // ===== PRODUCT IMAGE FALLBACK =====
    const productImg = document.getElementById('productImage');
    if (productImg) {
        productImg.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 240px; height: 360px;
                background: linear-gradient(135deg, #D4A574, #E8C9A0);
                border-radius: 20px;
                display: flex; flex-direction: column;
                align-items: center; justify-content: center;
                box-shadow: 0 20px 50px rgba(0,0,0,0.15);
                margin: 0 auto;
            `;
            placeholder.innerHTML = `
                <div style="font-size: 3.5rem; margin-bottom: 14px;">&#127826;</div>
                <div style="font-family:'Playfair Display',serif; font-size:1.2rem; font-weight:700; color:#2D2D44;">Nature's Glow</div>
                <div style="font-size:0.8rem; color:#555; margin-top:4px;">Beauty Gummies</div>
                <div style="margin-top:16px; background:rgba(255,255,255,0.3); padding:6px 14px; border-radius:50px; font-size:0.7rem; font-weight:600; color:#2D5A4A;">60 Gummies</div>
            `;
            this.parentNode.appendChild(placeholder);
        });
    }

    // ===== MODEL IMAGE FALLBACK =====
    const modelImg = document.getElementById('heroModelImage');
    if (modelImg) {
        modelImg.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 260px; height: 400px;
                background: linear-gradient(180deg, #F5EDE0 0%, #E8C9A0 100%);
                border-radius: 20px 20px 0 0;
                display: flex; flex-direction: column;
                align-items: center; justify-content: flex-end;
                padding-bottom: 40px;
                position: relative;
                margin: 0 auto;
            `;
            placeholder.innerHTML = `
                <div style="position:absolute; top:40px; font-size:5rem;">&#128135;</div>
                <div style="font-family:'Playfair Display',serif; font-size:1.1rem; font-weight:700; color:var(--dark);">Your Glow Starts Here</div>
                <div style="font-size:0.8rem; color:var(--text-light); margin-top:4px;">Replace with your model photo</div>
            `;
            this.parentNode.appendChild(placeholder);
        });
    }

    // ===== SCROLL REVEAL =====
    const revealEls = document.querySelectorAll('.story-block, .trans-card, .benefit-card, .ingredient, .proof-card, .dcard');
    revealEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));

    // ===== EXIT INTENT (subtle) =====
    let exitShown = false;
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 10 && !exitShown) {
            exitShown = true;
            // Could trigger a modal here if desired
            // ===== DELIVERY MAN FALLBACK =====
    const deliveryMan = document.getElementById('deliveryMan');
    if (deliveryMan) {
        deliveryMan.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 280px; height: 360px;
                background: linear-gradient(135deg, #F5EDE0, #E8C9A0);
                border-radius: 20px;
                display: flex; flex-direction: column;
                align-items: center; justify-content: center;
                box-shadow: 0 20px 50px rgba(0,0,0,0.15);
                margin: 0 auto;
                position: relative;
            `;
            placeholder.innerHTML = `
                <div style="font-size: 5rem; margin-bottom: 16px;">&#128666;</div>
                <div style="font-family:'Playfair Display',serif; font-size:1.2rem; font-weight:700; color:#2D2D44;">Fast Delivery</div>
                <div style="font-size:0.85rem; color:#555; margin-top:6px;">Accra: 24-48hrs</div>
                <div style="font-size:0.8rem; color:#777; margin-top:16px; font-family:'Poppins',sans-serif;">Replace with delivery man photo</div>
            `;
            this.parentNode.appendChild(placeholder);
        });
    }

    // ===== 3 WOMEN FALLBACKS =====
    ['woman1', 'woman2', 'woman3'].forEach((id, i) => {
        const img = document.getElementById(id);
        if (img) {
            img.addEventListener('error', function() {
                this.style.display = 'none';
                const placeholder = document.createElement('div');
                const names = ['Ama', 'Efua', 'Grace'];
                placeholder.style.cssText = `
                    width: 100%; height: 100%;
                    display: flex; flex-direction: column;
                    align-items: center; justify-content: center;
                    background: linear-gradient(180deg, #F5EDE0 0%, #E8C9A0 100%);
                    color: #2D5A4A;
                    font-family: 'Playfair Display', serif;
                    font-size: 1.1rem;
                    font-weight: 700;
                    text-align: center;
                    padding: 20px;
                `;
                placeholder.innerHTML = `
                    <div style="font-size: 4rem; margin-bottom: 12px;">&#128131;</div>
                    <div>${names[i]}</div>
                    <div style="font-size: 0.8rem; margin-top: 8px; font-family: 'Poppins', sans-serif; font-weight: 400; color: #666;">30-Day Transformation</div>
                    <div style="font-size: 0.75rem; margin-top: 4px; color: #888;">Replace with photo</div>
                `;
                this.parentNode.appendChild(placeholder);
            });
        }
    });

    // ===== LOGO FALLBACK =====
    const logoImg = document.getElementById('logoImage');
    if (logoImg) {
        logoImg.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 48px; height: 48px;
                background: linear-gradient(135deg, #FF6B9D, #C2185B);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.8rem;
                flex-shrink: 0;
            `;
            placeholder.innerHTML = '&#127807;';
            this.parentNode.insertBefore(placeholder, this);
        });
    }

    const footerLogo = document.getElementById('footerLogo');
    if (footerLogo) {
        footerLogo.addEventListener('error', function() {
            this.style.display = 'none';
        });
    }

    console.log('Exit intent detected');
        }
    });

    // ===== DELIVERY MAN FALLBACK =====
    const deliveryMan = document.getElementById('deliveryMan');
    if (deliveryMan) {
        deliveryMan.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 280px; height: 360px;
                background: linear-gradient(135deg, #F5EDE0, #E8C9A0);
                border-radius: 20px;
                display: flex; flex-direction: column;
                align-items: center; justify-content: center;
                box-shadow: 0 20px 50px rgba(0,0,0,0.15);
                margin: 0 auto;
                position: relative;
            `;
            placeholder.innerHTML = `
                <div style="font-size: 5rem; margin-bottom: 16px;">&#128666;</div>
                <div style="font-family:'Playfair Display',serif; font-size:1.2rem; font-weight:700; color:#2D2D44;">Fast Delivery</div>
                <div style="font-size:0.85rem; color:#555; margin-top:6px;">Accra: 24-48hrs</div>
                <div style="font-size:0.8rem; color:#777; margin-top:16px; font-family:'Poppins',sans-serif;">Replace with delivery man photo</div>
            `;
            this.parentNode.appendChild(placeholder);
        });
    }

    // ===== 3 WOMEN FALLBACKS =====
    ['woman1', 'woman2', 'woman3'].forEach((id, i) => {
        const img = document.getElementById(id);
        if (img) {
            img.addEventListener('error', function() {
                this.style.display = 'none';
                const placeholder = document.createElement('div');
                const names = ['Ama', 'Efua', 'Grace'];
                placeholder.style.cssText = `
                    width: 100%; height: 100%;
                    display: flex; flex-direction: column;
                    align-items: center; justify-content: center;
                    background: linear-gradient(180deg, #F5EDE0 0%, #E8C9A0 100%);
                    color: #2D5A4A;
                    font-family: 'Playfair Display', serif;
                    font-size: 1.1rem;
                    font-weight: 700;
                    text-align: center;
                    padding: 20px;
                `;
                placeholder.innerHTML = `
                    <div style="font-size: 4rem; margin-bottom: 12px;">&#128131;</div>
                    <div>${names[i]}</div>
                    <div style="font-size: 0.8rem; margin-top: 8px; font-family: 'Poppins', sans-serif; font-weight: 400; color: #666;">30-Day Transformation</div>
                    <div style="font-size: 0.75rem; margin-top: 4px; color: #888;">Replace with photo</div>
                `;
                this.parentNode.appendChild(placeholder);
            });
        }
    });

    // ===== LOGO FALLBACK =====
    const logoImg = document.getElementById('logoImage');
    if (logoImg) {
        logoImg.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 48px; height: 48px;
                background: linear-gradient(135deg, #FF6B9D, #C2185B);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.8rem;
                flex-shrink: 0;
            `;
            placeholder.innerHTML = '&#127807;';
            this.parentNode.insertBefore(placeholder, this);
        });
    }

    const footerLogo = document.getElementById('footerLogo');
    if (footerLogo) {
        footerLogo.addEventListener('error', function() {
            this.style.display = 'none';
        });
    }

    console.log('Nature's Glow Gummies — High-converting page loaded');
});
