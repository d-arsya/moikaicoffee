import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.moikaicoffee.com';

    // Helper to generate image URLs
    const posters = [
        'nasi-goreng-kecombrang.png',
        'nasi-hainan.png',
        'moipao-flavors.png',
        'nasi-pecel-moi.png',
        'moikai-ramen.png',
        'pastry-selection.png',
        'butterscotch-sea-salt-latte.png',
        'dawet-latte.png',
        'ayam-mentega-rice-bowl.png',
        'soft-sourdough-bread.png'
    ].map(name => `${baseUrl}/posters/${name}`);

    const photosAll = [
        'soft-opening-event-speaker.jpg',
        'classic-interior-wave-mural.jpg',
        'customer-working-laptop-mural.jpg',
        'outdoor-seating-umbrella.jpg',
        'moikai-coffee-signage-entrance.jpg',
        'friends-coffee-window-counter.jpg',
        'barista-pouring-matcha-layer.jpg',
        'pouring-espresso-iced-latte.jpg',
        'friendly-staff-smiling.jpg',
        'vintage-wooden-door-stone-wall.jpg',
        'friends-hanging-out-laughing.jpg',
        'quiet-coffee-pastry-moment.jpg',
        'barista-espresso-machine-smile.jpg',
        'remote-work-setup-iced-coffee.jpg',
        'busy-cozy-coffee-shop-atmosphere.jpg',
        'community-workshop-event.jpg',
        'minimalist-pink-table-decor.jpg',
        'hand-holding-latte-chocolate-donut.jpg'
    ].map(name => `${baseUrl}/photos/${name}`);

    const photosSubset = [
        'soft-opening-event-speaker.jpg',
        'classic-interior-wave-mural.jpg',
        'customer-working-laptop-mural.jpg',
        'outdoor-seating-umbrella.jpg',
        'moikai-coffee-signage-entrance.jpg',
        'friends-coffee-window-counter.jpg',
        'barista-pouring-matcha-layer.jpg',
        'pouring-espresso-iced-latte.jpg',
        'friendly-staff-smiling.jpg',
        'vintage-wooden-door-stone-wall.jpg',
        'friends-hanging-out-laughing.jpg'
    ].map(name => `${baseUrl}/photos/${name}`);

    const menus = [
        'menu-rice-bowl.jpg',
        'menu-nashville-chicken.jpg',
        'menu-nasi-goreng-kecombrang.jpg',
        'menu-signature-coffee.jpg',
        'menu-dawet-latte.jpg'
    ].map(name => `${baseUrl}/menus/${name}`);

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            images: [...posters, ...photosAll],
        },
        {
            url: `${baseUrl}/landingpage`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
            images: [...menus, ...photosSubset],
        },
        {
            url: `${baseUrl}/#menu`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#locations`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
