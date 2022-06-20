import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  addItemForm!: FormGroup;
  @Output() addItem = new EventEmitter();

  // TODO
  categories: string[] = ['интериорна врата', 'входна врата'];
  manufacturers: string[] = [
    'Variodor',
    'Eurostill',
    'Haska',
    'Star Security Door',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addItemForm = this.fb.group({
      category: [
        '',
        [
          Validators.required,
          Validators.pattern(/интериорна врата|входна врата/),
        ],
      ],
      title: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [
        '',
        [Validators.required, Validators.pattern(/\d/), Validators.min(1)],
      ],
      imgUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
          ),
        ],
      ],
    });
  }

  submitHandler() {
    this.addItem.emit(this.addItemForm.value);
    this.addItemForm.reset();
  }
}
