import React from 'react'
import { MagicCard } from 'reactjs-mtg-card'

const NissaCard = () => {
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

export default NissaCard
