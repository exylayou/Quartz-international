const fs = require('fs');

let text = fs.readFileSync('src/pages/CabinetCityPage.tsx', 'utf8');

// Replace imports
text = text.replace(/import \{ Link, useParams, Navigate \} from 'react-router-dom';/, "import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';");

// Remove openCalculator import from context if it's unused (or leave it, but let's remove it)
// Let's just find `const { openCalculator } = useCalculator();` and replace it with `const navigate = useNavigate();`
text = text.replace(/const \{ openCalculator \} = useCalculator\(\);/, "const navigate = useNavigate();");

// Also remove `import { useCalculator } from '../context/CalculatorContext';`
text = text.replace(/import \{ useCalculator \} from '\.\.\/context\/CalculatorContext';/, "");

// Replace onClick handlers
text = text.replace(/onClick=\{.*?openCalculator\(\)\}/g, "onClick={() => navigate('/kitchen-cabinet-estimator')}");

fs.writeFileSync('src/pages/CabinetCityPage.tsx', text);
console.log('Cabinet estimator links fixed!');
