import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ 
  title = "Fresinika - Fresas con Crema en Managua", 
  description = "Fresas con crema artesanales en Managua, Nicaragua. Frescas, deliciosas y preparadas al momento. Delivery rápido en toda la ciudad." 
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);

  return null;
}
