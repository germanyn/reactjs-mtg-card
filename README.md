# reactjs-mtg-card

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/reactjs-mtg-card.svg)](https://www.npmjs.com/package/reactjs-mtg-card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Demo](https://germanyn.github.io/reactjs-mtg-card/)

## Magic: The Gathering Reactjs Card Generator

MTG Reactjs is a ongoing project to generate Reactjs cards as you want.

Based on [Davide Iaiunese good work](https://codeburst.io/make-a-magic-the-gathering-card-in-css-5e4e06a5e604). Uses [mana-font](https://github.com/andrewgioia/mana) as the mana symbols and can use [keyrune](https://github.com/andrewgioia/keyrune) as the set symbols (see the example folder).

## Install

```bash
npm install reactjs-mtg-card keyrune mana-font
```

or

```bash
yarn add reactjs-mtg-card keyrune mana-font
```

## Usage

```tsx
import React from 'react'
import 'reactjs-mtg-card/dist/index.css'
import { MagicCard } from 'reactjs-mtg-card'

const MyApp = () => {
    return (
        <MagicCard
            cardColor="green"
            name='Oath of Nissa'
            manaCost='{2}{G}{U}{W}{R}{B}'
            descriptions={[
                'When Oath of Nissa enters the battlefield, look at the top three cards of your library. You may reveal a creature, land, or planeswalker card from among them and put it into your hand. Put the rest on the bottom of your library in any order.',
                'You may spend mana as though it were mana of any color to cast planeswalker spells.',
            ]}
            expansionSymbol="https://image.ibb.co/kzaLjn/OGW_R.png"
            artUrl="https://image.ibb.co/fqdLEn/nissa.jpg"
            type='Legendary Enchantment'
            flavorText={['"For the life of every plane, I will keep watch."']}
            fotterLeftText={[
                '140/184 R',
                'OGW &#x2022; EN Wesley Burt',
            ]}
            fotterRightText={[
                '&#x99; &amp; &#169; 2016 Wizards of the Coast',
            ]}
        />
    )
}

export default MyApp
```

## License

MIT © [germanyn](https://github.com/germanyn)
