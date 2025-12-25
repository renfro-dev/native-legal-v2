# Karl Font Capitalization Rules

This document defines the stylistic capitalization rules used with the KarlCanva font throughout the Native Legal website.

## Overview

The Karl font uses a distinctive mixed-case style where specific letters are capitalized to create visual rhythm and brand identity. This is NOT standard title case or sentence case—it's a unique stylistic choice.

## Core Rules

### Always Uppercase
These letters should **always** be capitalized when they appear:
- **E** - The most consistently capitalized letter
- **U** - Almost always uppercase
- **V** - Uppercase in most cases

### Usually Uppercase  
These letters are **often** capitalized, especially mid-word:
- **T** - Uppercase at word starts and sometimes mid-word
- **I** - Often uppercase, especially mid-word
- **A** - Sometimes uppercase mid-word

### Start of Important Words
The first letter of key/emphasized words may be uppercase:
- **F** - For, Firm, Future
- **T** - Tools, To
- **N** - Native

### Always Lowercase
These letters typically remain lowercase:
- a (except when emphasized)
- b, c, d, f, g, h, j, k, l, m, n, o, p, q, r, s, w, x, y, z

## Examples

### Brand Name
```
NaTiVE lEgal
```
- N = uppercase (brand start)
- a = lowercase
- T = uppercase
- i = lowercase  
- V = uppercase
- E = uppercase
- l = lowercase
- E = uppercase
- g = lowercase
- a = lowercase
- l = lowercase

### Headlines

| Standard Text | Karl Font Style |
|---------------|-----------------|
| Modern Tools | modErn Tools |
| For Law Firms | For laW fIrms |
| Scale Revenue | scalE rEVEnUE |
| Not Overhead | Not oVErhEad |
| Real Results | rEAl rEsUlTs |
| From Real Firms | from rEal fIrms |
| Ready To Future-proof Your Firm? | rEady To FUTUrE-proof yoUr FIrm? |

## Quick Reference

When writing text for Karl font headers:

1. **Start with lowercase** for most words (except proper nouns or emphasis)
2. **Capitalize all E's** - This is the signature element
3. **Capitalize all U's** - Creates visual consistency  
4. **Capitalize V's** - Adds angular visual interest
5. **Capitalize T's and I's** selectively for rhythm
6. **First letter of emphasized words** can be uppercase (F, T, N)

## Usage Context

The Karl font capitalization style is used for:
- Logo text ("NaTiVE lEgal")
- Main headlines (h1)
- Section headlines (h2)
- NOT used for body text, navigation, or smaller UI elements

## Technical Implementation

In React components, the Karl font is applied via:
```jsx
style={{ fontFamily: 'var(--font-karl)' }}
```

The `--font-karl` CSS variable is defined in `client/src/index.css` and references the KarlCanva font family.
