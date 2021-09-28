import React from 'react'
import 'mana-font'
import 'keyrune'
import styles from './MagicCard.module.css'
import { manaCostMatcher, manaCostParser } from './magicUtils'
import './MTGFonts.css'

export interface CardProps {
    name?: string
    type?: string
    manaCost?: string
    descriptions?: string[]
    flavorText?: string[]
    expansionSymbol?: string
    powerAndThougness?: string
    artUrl?: string
    fotterLeftText?: string[]
    fotterRightText?: string[]
    cardColor?: CardColor
}

type CardColor =
    | 'green'
    | 'blue'
    | 'black'
    | 'red'
    | 'white'
    | 'uncolor'

const MagicCard: React.FC<CardProps> = (props) => {

    const manaIcons: { [key: string]: string } = {
        'G': 'ms ms-g ms-cost',
        'R': 'ms ms-r ms-cost',
        'U': 'ms ms-u ms-cost',
        'B': 'ms ms-b ms-cost',
        'W': 'ms ms-w ms-cost',
    }

    // const manaClassesMap: { [key: string]: string } = {
    //     'G': 'green-mana',
    //     'R': 'red-mana',
    //     'U': 'blue-mana',
    //     'B': 'black-mana',
    //     'W': 'white-mana',
    // }

    const frameClassesMap: { [key in CardColor]: string } = {
        'green': styles['green-frame'],
        'red': styles['red-frame'],
        'blue': styles['blue-frame'],
        'black': styles['black-frame'],
        'white': styles['white-frame'],
        'uncolor': styles['uncolor-frame'],
    }

    const frameClass = props.cardColor
        ? frameClassesMap[props.cardColor]
        : 'uncolor-frame'

    const manaCostArray = props.manaCost
        && manaCostParser(props.manaCost)
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-background']}>
                <div className={[styles['card-frame'], frameClass].join(' ')}>

                    <div className={styles['frame-header']}>
                        <div className={styles.name}>{props.name}</div>
                        <div className={styles['mana-costs']}>
                            {manaCostArray && manaCostArray.map(cost => (
                                <div className={styles['mana-icon']}>
                                    <i className={`${manaIcons[cost] || `ms ms-${cost} ms-cost`} ms-shadow`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles['frame-art']}>
                        <img src={props.artUrl} alt="card art" />
                    </div>

                    <div className={styles['frame-type-line']}>
                        <div className={styles['type']}>{props.type}</div>
                        {props.expansionSymbol && (
                            <div className={styles['set-icon']}>
                                {props.expansionSymbol.startsWith('ss')
                                    ? <i className={`${props.expansionSymbol} ss-fw`} />
                                    : <img src={props.expansionSymbol} alt="expansion-icon" />
                                }
                            </div>
                        )}
                    </div>

                    <div className={styles['frame-text-box']}>
                        {props.descriptions?.map((text, index, { length }) => {
                            const textWithManaCosts = text.replaceAll(manaCostMatcher, (match) => {
                                const cost = match[1]
                                return /*html*/`
                                    <span style="font-size: 14px;">
                                        <i class="${`${manaIcons[cost] || `ms ms-${cost} ms-cost`}`}"></i>
                                    </span>
                                `
                            })
                            return <p
                                className={`description${index < length ? ' ftb-inner-margin' : ''}`}
                                dangerouslySetInnerHTML={{ __html: textWithManaCosts }}
                            />
                        })}
                        {props.flavorText?.map((text, index) => (
                            <p
                                className={`flavour-text${!index ? ' flavour-text-first-margin' : ''}`}
                                dangerouslySetInnerHTML={{ __html: text }}
                            />
                        ))}
                    </div>

                    <div className={[styles['frame-bottom-info'], styles['inner-margin']].join(' ')}>
                        <div className={styles['fbi-left']}>
                            {props.fotterLeftText?.map(text => (
                                <p dangerouslySetInnerHTML={{ __html: text }} />
                            ))}
                        </div>

                        <div className={styles['fbi-center']}/>

                        <div className={styles['fbi-right']}>
                            {props.fotterRightText?.map(text => (
                                <p dangerouslySetInnerHTML={{ __html: text }} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export {
    MagicCard
}