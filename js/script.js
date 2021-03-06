var app = new Vue(
    {
        el: '#root',
        data : {
            contactIndex: 0,
            contactFilter: '',
            userMessage: '',
            
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropdown: false
                        },    
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            dropdown: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },
            ]
        },
        methods : {

            // Funzione che al click dell'utente, mostra la chat corrente
            activeChat(index) {
                this.contactIndex = index;
            },

            // Funzione per filtrare gli utenti
            filterUser() {
                this.contacts.forEach(element => {
                    if(element.name.toLowerCase().includes(this.contactFilter.toLowerCase())) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            },

            // Funzione che va a pushare un oggetto "messaggio" nell'Array Messages
            pushUserMessage(index) {
                const userMessageItem = {
                    date : dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text : this.userMessage,
                    status : 'sent',
                    dropdown: false
                }

                if( this.userMessage.length != '') {
                    this.contacts[index].messages.push(userMessageItem);
                    this.userMessage = '';
                    this.pushBotMessage(index);
                }

                
            },

            // Funzione che fa apparire un messaggio di risposta all'utente dopo un secondo rispetto all'input
            pushBotMessage(index) {
                setTimeout( () => {
                    const botMessage = {
                        date : dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text : 'Hola',
                        status : 'received',
                        dropdown: false
                    }

                    this.contacts[index].messages.push(botMessage);
                }, 1000 ); 
            },

            // Funzione per far comparire il dropdown sul singolo messaggio
            showDropDown(index) {
                let mesIndex = index;
                this.contacts[this.contactIndex].messages.forEach((element, index) => {
                    if( mesIndex == index ) {
                        element.dropdown = !element.dropdown;
                    } else {
                        element.dropdown = false;
                    }
                });  
            },

            // Funzione che toglie il dropdown dal messaggio
            toggleDropDown() {
                this.contacts[this.contactIndex].messages.forEach((element) => {
                    element.dropdown = false;
                })
            },

            // Funzione che elimina il messaggio
            removeMessage(index) {
                this.contacts[this.contactIndex].messages.splice(index, 1); 
           
            }
        }
    }
)