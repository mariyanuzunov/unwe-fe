import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit {
  loaded: boolean = false;
  editItemForm!: FormGroup;
  @Input() item$!: Observable<IDoor>;
  @Output() editItem = new EventEmitter();

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
    this.item$.subscribe((item) => {
      this.editItemForm = this.fb.group({
        category: [
          item.category,
          [
            Validators.required,
            Validators.pattern(/интериорна врата|входна врата/),
          ],
        ],
        title: [item.title, [Validators.required]],
        manufacturer: [item.manufacturer, [Validators.required]],
        description: [item.description, [Validators.required]],
        price: [
          item.price,
          [Validators.required, Validators.pattern(/\d/), Validators.min(1)],
        ],
        imgUrl: [
          item.imgUrl,
          [
            Validators.required,
            Validators.pattern(
              /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
            ),
          ],
        ],
      });

      this.loaded = true;
    });
  }
}
