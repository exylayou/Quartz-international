const fs = require('fs');

let text = fs.readFileSync('src/pages/CabinetPseoPage.tsx', 'utf8');

// Replace imports
text = text.replace(/import \{ useParams, Navigate, useNavigate \} from 'react-router-dom';/, "import { useLocation, Navigate, useNavigate } from 'react-router-dom';");

// Replace component signature and logic
text = text.replace(/export default function CabinetPseoPage\(\) \{[\s\S]*?const pageData = cabinetPseoPages\.find\(p => p\.slug === seoSlug\);/, `export default function CabinetPseoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoSlug = location.pathname.substring(1);
  const pageData = cabinetPseoPages.find(p => p.slug === seoSlug);`);

fs.writeFileSync('src/pages/CabinetPseoPage.tsx', text);
console.log('Fixed CabinetPseoPage.tsx routing logic');
