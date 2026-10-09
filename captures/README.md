# Captures

- `reference-*-{390,820,1440}.json`: each reference page's headed sections and measured boxes (`capture.cjs`). The screenshots were taken and removed: they carry the site's photography.
- `study.cjs`: screenshots of the study; `study-*-1440.jpg` are the current ones.
- `scan.cjs`: overflow, fitted-line floor and axe, Chrome and WebKit, three widths, both schemes.
- `measure.cjs`: the band tables in the README.
- The Michigan outline in `src/map.ts` was projected from the public `us-states.json` GeoJSON (PublicaMundi/MappingAPI, from U.S. Census cartographic boundaries).

```bash
NODE_PATH=<a node_modules with playwright> node captures/scan.cjs http://localhost:5186/ index menu about careers locations
```
