import React from 'react'
import 'reactjs-mtg-card/dist/index.css'
import { MagicCard } from 'reactjs-mtg-card'

const GermanoCard = () => {
    return (
        <MagicCard
            cardColor='blue'
            name='Germano Gascho'
            manaCost='{1}{U}'
            descriptions={[
                '{1}{U}<span>: programador alvo não pode ser bloqueado por código até final do turno</span',
            ]}
            artUrl="https://avatars.githubusercontent.com/u/35080245?s=400&u=12342e8d1aedc558809a8c5464e2ebf653efc9ab&v=4"
            type='Criatura &ndash; Humano Desenvolvedor'
            flavorText={[
                '"Testa sanidade!"',
            ]}
            fotterRightText={[
                '&#x99; &amp; &#169; 2021 Germano Gascho',
            ]}
        />
    )
}

export default GermanoCard
