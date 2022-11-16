import React from "react";


export default class Versets extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            verses : [
                {
                    ref: 'Phillipiens 4:6, 7',
                    text : 'Ne vous inquiétez de rien, mais en tout, par la prière et la supplication avec des remerciements, faites connaître vos requêtes à Dieu ; et la paixi de Dieu, qui dépasse tout ce que l’on peut comprendre, protégera vos cœursj et vos espritsa par le moyen de Christ Jésus.'
                },
                {
                    ref:'Jacques 4:8',
                    text: 'Approchez-​vous de Dieu, et il s’approchera de vous. Nettoyez vos mains, pécheursk, et purifiez vos cœurs, gens indécis.'
                },
                {
                    ref:'Jean 17:3',
                    text:'Ceci signifie la vie éternelle : qu’ils apprennent à te connaître, toi, le seul vrai Dieuf, et celui que tu as envoyé, Jésus Christ.'
                },
                {
                    ref:'Matthieu 24:14',
                    text:'14 Et cette bonne nouvelle du Royaume sera prêchée sur toute la terre, en témoignage pour toutes les nations, et alors viendra la fin.'
                },
                {
                    ref:'Matthieu 6:9',
                    text:'« Vous devez donc prier ainsi : « “Notre Père qui es dans les cieux, que ton nom soit sanctifié. '
                },
                {
                    ref:'2 Timothée 2:15',
                    text:'15 Fais tout ton possible pour te présenter à Dieu comme un homme approuvé, un ouvrier qui n’a aucune raison d’avoir honte, qui expose correctement la parole de la vérité. '
                },
                {
                    ref:'1 Corinthiens 10:31',
                    text:'31 Par conséquent, que vous mangiez, que vous buviez, ou quoi que vous fassiez d’autre, faites tout pour la gloire de Dieu. '
                },
                {
                    ref:'Proverbes 29:11',
                    text:'11 Une personne stupide donne libre cours à toutes ses émotions, mais le sage reste calme et les maîtrise.'
                },
                {
                    ref:'Colossiens 3:15',
                    text:'15 Que la paix du Christ règne dans vos cœurs, car vous avez été appelés à cette paix pour former un seul corps. Et montrez-​vous reconnaissants. '
                },
                {
                    ref:'Jérémie 29:11',
                    text:'11 « “Car je sais bien ce que j’envisage pour vous, déclare Jéhovah. C’est la paix que je veux pour vous, et non le malheur. Je veux vous donner un avenir et un espoir. '
                },
                {
                    ref:'Jérémie 1:19',
                    text:'19 Ils te combattront, mais ils ne seront pas les plus forts, car voici ce que déclare Jéhovah: “Je suis avec toi pour te sauver.”'
                },
                {
                    ref:'Matthieu 22:21',
                    text:'Ils répondirent: « De César.» Alors il leur dit : « Rendez donc les choses de César à César, mais les choses de Dieu à Dieu. » '
                },
                {
                    ref:'Actes 5:29',
                    text:'Pierre et les autres apôtres répondirent: « Nous devons obéir à Dieu plutôt qu’aux hommes. '
                },
                {
                    ref:'Proverbes 27:11',
                    text:'11 Mon fils, agis avec sagesse, et réjouis mon cœur, pour que je puisse répondre à celui qui me provoque.'
                }
            ],
            displayRef : '',
            displayText : '',
            refOrText : 0,
        }
        this.draw = this.draw.bind(this);
        this.reveal = this.reveal.bind(this);
    }

    componentDidMount(){
        this.draw();
    }

    draw(){
        let verseDrawed = Math.floor(Math.random()*this.state.verses.length);
        
        this.setState((state)=>({
            displayRef : state.verses[verseDrawed].ref,
            displayText: state.verses[verseDrawed].text,
            refOrText : Math.floor(Math.random()*2)
        }));
        
    }

    reveal(){
        this.setState({refOrText : 2});
    }


    render(){console.log(this.state.show)
        return(
        <div id='find-verse'>
            <h1>Découvre le verset caché</h1>

            <div id="ref-zone">
                {this.state.refOrText !==0 && <p>{this.state.displayRef}</p>}
            </div>
            <div id="verse-zone">
                {this.state.refOrText !==1 && <p>{this.state.displayText}</p>}
            </div>

            <div id='buttons'>
                {this.state.refOrText === 2?
                    <button className="button" id='button-next' onClick={this.draw}>Verset Suivant</button>
                :
                    <button className="button" id='button-response' onClick={this.reveal}> Réponse</button>
                }
            </div>
        </div>);
    }
}