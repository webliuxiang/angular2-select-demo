import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    formSingle: FormGroup;
    multipleSingle: boolean = false;
    optionsSingle: Array<any> = [];
    alternativeOptionsSingle: Array<any> = [];
    initialValueSingle: string = '22';
    allowClear: boolean = true;

    formMultiple: FormGroup;
    multipleMultiple: boolean = true;
    optionsMultiple: Array<any> = [];
    alternativeOptionsMultiple: Array<any> = [];
    initialValueMultiple: Array<string> = ['0', '2', '22', '66'];

    opts;
    alternativeOpts;

    @ViewChild('singleSelectComponent') singleSelectComponent;
    @ViewChild('multipleSelectComponent') multipleSelectComponent;

    @ViewChild('preSingle') preSingle;
    @ViewChild('preMultiple') preMultiple;

    logSingleString: string = '';
    logMultipleString: string = '';

    constructor() {

        this.opts = this.OPTIONS_A;

        this.alternativeOpts = [{
            value: '0',
            label: '0'
        }, {
            value: '1',
            label: '1'
        }, {
            value: 'A',
            label: 'A'
        }, {
            value: 'B',
            label: 'B'
        }]

        this.optionsSingle = this.opts.slice(0);
        this.optionsMultiple = this.opts.slice(0);
    }

    ngOnInit() {
        this.formSingle = new FormGroup({});
        this.formSingle.addControl('selectSingle',
                new FormControl(this.initialValueSingle));

        this.formMultiple = new FormGroup({});
        this.formMultiple.addControl('selectMultiple',
                new FormControl(this.initialValueMultiple));
    }

    onSingleOpened() {
        this.logSingle('- opened');
    }

    onSingleClosed() {
        this.logSingle('- closed');
    }

    onSingleSelected(item) {
        this.logSingle('- selected (value: ' + item.value  + ', label:' +
                       item.label + ')');
    }

    onSingleDeselected(item) {
        this.logSingle('- deselected (value: ' + item.value  + ', label:' +
                       item.label + ')');
    }

    onMultipleOpened() {
        this.logMultiple('- opened');
    }

    onMultipleClosed() {
        this.logMultiple('- closed');
    }

    onMultipleSelected(item) {
        this.logMultiple('- selected (value: ' + item.value  + ', label:' +
                       item.label + ')');
    }

    onMultipleDeselected(item) {
        this.logMultiple('- deselected (value: ' + item.value  + ', label:' +
                       item.label + ')');
    }

    onSingleResetClick() {
        this.formSingle.reset();
    }

    onMultipleResetClick() {
        this.formMultiple.reset();
    }

    onMultipleSetOptions1Click() {
        this.optionsMultiple = this.alternativeOpts.slice(0);
    }

    private logSingle(msg: string) {
        this.logSingleString += msg + '\n';

        // Let change detection do its work before scrolling to div bottom.
        setTimeout(() => {
            this.scrollToBottom(this.preSingle.nativeElement);
        });
    }

    private logMultiple(msg: string) {
        this.logMultipleString += msg + '\n';

        // Let change detection do its work before scrolling to div bottom.
        setTimeout(() => {
            this.scrollToBottom(this.preMultiple.nativeElement);
        });
    }

    private scrollToBottom(elem) {
        elem.scrollTop = elem.scrollHeight;
    }

	OPTIONS_A = [
		{label: 'Agrajag', value: '0'},
		{label: 'Mrs Alice Beeblebrox', value: '1'},
		{label: 'The Allitnils', value: '2'},
		{label: 'Almighty Bob', value: '3'},
		{label: 'Anjie', value: '4'},
		{label: 'Arcturan Megafreighter crew', value: '5'},
		{label: 'Aseed', value: '6'},
		{label: 'Barmen', value: '7'},
		{label: 'Barman of the Horse and Groom', value: '8'},
		{label: 'Barman in Old Pink Dog Bar', value: '9'},
		{label: 'Barman in the Domain of the King', value: '10'},
		{label: 'BBC department head', value: '11'},
		{label: 'Blart Versenwald III', value: '12'},
		{label: 'Bodyguard', value: '13'},
		{label: 'Caveman', value: '14'},
		{label: 'Colin', value: '15'},
		{label: 'Constant Mown', value: '16'},
		{label: 'Dr. Dan Streetmentioner', value: '17'},
		{label: 'Deep Thought', value: '18'},
		{label: 'Dionah Carlinton Housney', value: '19'},
		{label: 'Disaster Area\'s chief research accountant', value: '20'},
		{label: 'Dish of the Day', value: '21'},
		{label: 'East River Creature', value: '22'},
		{label: 'Eccentrica Gallumbits', value: '23'},
		{label: 'Eddie', value: '24'},
		{label: 'Effrafax of Wug', value: '25'},
		{label: 'Elders of Krikkit', value: '26'},
		{label: 'Elvis Presley', value: '27'},
		{label: 'Emily Saunders', value: '28'},
		{label: 'Emperor of the Galaxy', value: '29'},
		{label: 'Mrs Enid Kapelsen', value: '30'},
		{label: 'Eric Bartlett', value: '31'},
		{label: 'Fenchurch', value: '32'},
		{label: 'Frankie and Benjy Mouse', value: '33'},
		{label: 'Frat Gadz', value: '34'},
		{label: 'Frogstar Prisoner Relations Officer', value: '35'},
		{label: 'Gag Halfrunt', value: '36'},
		{label: 'Gail Andrews', value: '37'},
		{label: 'Gargravarr', value: '38'},
		{label: 'Garkbit', value: '39'},
		{label: 'Genghis Temüjin Khan', value: '40'},
		{label: 'Girl with a Master\'s degree', value: '41'},
		{label: 'God', value: '42'},
		{label: 'Gogrilla Mincefriend', value: '43'},
		{label: 'Golgafrinchans', value: '44'},
		{label: 'Agda and Mella', value: '45'},
		{label: 'Captain', value: '46'},
		{label: 'Great Circling Poets of Arium', value: '47'},
		{label: 'Hairdresser', value: '48'},
		{label: 'Management consultant', value: '49'},
		{label: 'Marketing girl', value: '50'},
		{label: 'Number One', value: '51'},
		{label: 'Number Two', value: '52'},
		{label: 'Telephone Sanitizer', value: '53'},
		{label: 'Googleplex Starthinker', value: '54'},
		{label: 'Great Green Arkleseizure', value: '55'},
		{label: 'Great Hyperlobic Omnicognate Neutron Wrangler', value: '56'},
		{label: 'Grunthos the Flatulent', value: '57'},
		{label: 'Guide Mark II', value: '58'},
		{label: 'Hactar', value: '59'},
		{label: 'Haggunenon Underfleet Commander', value: '60'},
		{label: 'Heimdall', value: '61'},
		{label: 'Hig Hurtenflurst', value: '62'},
		{label: 'Hillman Hunter', value: '63'},
		{label: 'Hotblack Desiato', value: '64'},
		{label: 'Humma Kavula', value: '65'},
		{label: 'Hurling Frootmig', value: '66'},
		{label: 'Ix', value: '67'},
		{label: 'Judiciary Pag', value: '68'},
		{label: 'Karl Mueller', value: '69'},
		{label: 'Know-Nothing Bozo the Non-Wonder Dog', value: '70'},
		{label: 'Krikkiters', value: '71'},
		{label: 'Kwaltz', value: '72'},
		{label: 'Lady Cynthia Fitzmelton', value: '73'},
		{label: 'The Lajestic Vantrashell of Lob', value: '74'},
		{label: 'Lallafa', value: '75'},
		{label: 'Lazlar Lyricon', value: '76'},
		{label: 'Lig Lury, Jr', value: '77'},
		{label: 'Lintilla', value: '78'},
		{label: 'Loonquawl and Phouchg', value: '79'},
		{label: 'The Lord', value: '80'},
		{label: 'Lord High Sanvalvwag of Hollop', value: '81'},
		{label: 'Lunkwill and Fook', value: '82'},
		{label: 'Magician', value: '83'},
		{label: 'Majikthise and Vroomfondel', value: '84'},
		{label: 'Max Quordlepleen', value: '85'},
		{label: 'Mo Minetti', value: '86'},
		{label: 'Murray Bost Henson', value: '87'},
		{label: 'Old Man on the Poles', value: '88'},
		{label: 'Old Thrashbarg', value: '89'},
		{label: 'Old Woman in the Cave', value: '90'},
		{label: 'Oolon Colluphid', value: '91'},
		{label: 'Paul Neil Milne Johnstone', value: '92'},
		{label: 'Phouchg and Loonquawl', value: '93'},
		{label: 'Poodoo', value: '94'},
		{label: 'Prak', value: '95'},
		{label: 'Pralite monks', value: '96'},
		{label: 'President Hudson', value: '97'},
		{label: 'Princess Hooli', value: '98'},
		{label: 'Mr Prosser', value: '99'},
		{label: 'Prostetnic Vogon Jeltz', value: '100'},
		{label: 'Questular Rontok', value: '101'},
		{label: 'Raffle ticket woman', value: '102'},
		{label: 'Random Dent', value: '103'},
		{label: 'Receptionists', value: '104'},
		{label: 'New York Hotel receptionist', value: '105'},
		{label: 'Megadodo receptionist', value: '106'},
		{label: 'Reg Nullify', value: '107'},
		{label: 'Rob McKenna', value: '108'},
		{label: 'Roosta', value: '109'},
		{label: 'The Ruler of the Universe', value: '110'},
		{label: 'Russell', value: '111'},
		{label: 'Safety and Civil Reassurance Administration Officials', value: '112'},
		{label: 'Sheila Steafel', value: '113'},
		{label: 'Shooty and Bang Bang', value: '114'},
		{label: 'Six Men', value: '115'},
		{label: 'Slartibartfast', value: '116'},
		{label: 'Sperm Whale', value: '117'},
		{label: 'Stavro Mueller', value: '118'},
		{label: 'Strinder the Tool Maker', value: '119'},
		{label: 'Sulijoo', value: '120'},
		{label: 'Thor', value: '121'},
		{label: 'Tribesmen of the Cold Hillsides', value: '122'},
		{label: 'Trin Tragula', value: '123'},
		{label: 'Varntvar The Priest', value: '124'},
		{label: 'Veet Voojagig', value: '125'},
		{label: 'Vroomfondel and Majikthise', value: '126'},
		{label: 'War Command Krikkiters', value: '127'},
		{label: 'Will Smithers', value: '128'},
		{label: 'The Wise Old Bird', value: '129'},
		{label: 'Werdle Sneng', value: '130'},
		{label: 'Wonko the Sane', value: '131'},
		{label: 'Wowbagger, the Infinitely Prolonged', value: '132'},
		{label: 'Yooden Vranx', value: '133'},
		{label: 'Zaphod Beeblebrox the Fourth', value: '134'},
		{label: 'Zarniwoop [Vann Harl]', value: '135'},
		{label: 'Zarquon', value: '136'},
		{label: 'Zem', value: '137'}
	];

	OPTIONS_B = [];
}

