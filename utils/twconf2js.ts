import resolveConfig from "tailwindcss/resolveConfig";

import tailwindcss_config_js from "../tailwind.config";

const tailwind_config = resolveConfig(tailwindcss_config_js);

export { tailwind_config };
