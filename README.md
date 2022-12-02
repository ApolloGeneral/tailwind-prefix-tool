# Tailwind Prefix Tool

A tool that can save some time by applying prefix to tailwind classes.

Using latest tailwind and covers all the major cases regarding prefix mentioned in tailwindcss [docs](https://tailwindcss.com/docs/configuration#prefix)

- Variant modifier
- Negatives values
- Important Specifier

![demo](/public/tw-prefix-tool.png)

## Demo

Access at https://link.com

Input

```css
flex w-full hover:text-black-100 mt-8 -mb-4
```

Output

```css
tw-flex tw-w-full hover:tw-text-black-100 tw-mt-8 -tw-mb-4
```

## Development

Switch to `node 18` and just run `yarn dev`

## Future Roadmap

- Convert to a VSCode Extension

## Raise an Issue

You can open a issue, if any edge case is missing or something goes wrong.
