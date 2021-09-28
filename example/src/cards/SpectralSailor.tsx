import React from 'react'
import { MagicCard } from 'reactjs-mtg-card'

const SpectralSailor = () => {
    return (
        <MagicCard
            cardColor='blue'
            name='Spectral Sailor'
            manaCost='{U}'
            descriptions={[
                'Flash (<i>You may cast this spell any time you could cast an instant.)</i>',
                'Flying',
                '{3}{U}<span>: Draw a card</span',
            ]}
            expansionSymbol="ss ss-m20 ss-4x ss-uncommon ss-grad"
            artUrl="https://static2.mtgarena.pro/mtg/pict/spectral-sailor-m20--art-mtga.png"
            type='Creature &ndash; Sprit Pirate'
            flavorText={[
                '"Any ship that sails on these mean seas for long is bound to pick up a ghost or two."',
                '&ndash;Admiral Becket Brass',
            ]}
            fotterLeftText={[
                '076/280 U',
                'M20 &#x2022; EN CRISTI BALANESCU',
            ]}
            fotterRightText={[
                '&#x99; &amp; &#169; 2019 Wizards of the Coast',
            ]}
        />
    )
}

export default SpectralSailor
