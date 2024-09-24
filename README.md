# Playwright ListItem Level Bug Reproduction

## Given this HTML

```html
<ul>
  <li>
    First Top-Level List Item

    <div>
      <ul>
        <li>Second-Level List Item</li>
      </ul>
    </div>
  </li>
  <li>Second Top-Level List Item</li>
</ul>
```

# When asserting that there only 2 two top-level list items

```
expect(await page.getByRole('listitem', { level: 1 }).count()).toBe(2);
```

# Then this is the result:

```

  1) [webkit] › listitem.spec.ts:4:5 › first-level list items ──────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 2
    Received: 0

       6 |
       7 |   expect(await page.getByRole('listitem').count()).toBe(3);
    >  8 |   expect(await page.getByRole('listitem', { level: 1 }).count()).toBe(2);
         |                                                                  ^
       9 | });
      10 |
      11 |

        at listitem-level-reproduction/tests/listitem.spec.ts:8:66

  2) [chromium] › listitem.spec.ts:4:5 › first-level list items ────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 2
    Received: 0

       6 |
       7 |   expect(await page.getByRole('listitem').count()).toBe(3);
    >  8 |   expect(await page.getByRole('listitem', { level: 1 }).count()).toBe(2);
         |                                                                  ^
       9 | });
      10 |
      11 |

        at listitem-level-reproduction/tests/listitem.spec.ts:8:66

  3) [firefox] › listitem.spec.ts:4:5 › first-level list items ─────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 2
    Received: 0

       6 |
       7 |   expect(await page.getByRole('listitem').count()).toBe(3);
    >  8 |   expect(await page.getByRole('listitem', { level: 1 }).count()).toBe(2);
         |                                                                  ^
       9 | });
      10 |
      11 |

        at listitem-level-reproduction/tests/listitem.spec.ts:8:66
```
