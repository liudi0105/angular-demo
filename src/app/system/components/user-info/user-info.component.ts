import { Component, OnInit } from '@angular/core';
import { Column, InputType, DataItem } from '@/commons/interfaces/service-interface';
import consts from '@/commons/utils/constants';
import { UserService } from '@/system/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers: [UserService]
})
export class UserInfoComponent implements OnInit {

  search = this.userService.search;
  list = this.userService.list;
  info = this.userService.info;

  columns: Array<Column> = [
    {
      title: '姓名',
      dataIndex: 'username',
      searchable: true,
      required: true,
    },
    {
      title: '姓别',
      dataIndex: 'gender',
      type: InputType.SELECT,
      options: this.listGenderType(),
      searchable: true,
      required: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      type: InputType.NUMBER,
      required: true,
    },
    {
      title: '学历',
      dataIndex: 'degree',
      type: InputType.SELECT,
      options: this.listDegreeType(),
    },
    {
      title: '户籍',
      dataIndex: 'census',
    },
    {
      title: '转正状态',
      dataIndex: 'positiveStatus',
      type: InputType.SWITCH,
      options: consts.BooleanType,
    },
    {
      title: '在职状态',
      dataIndex: 'positionStatus',
      type: InputType.SWITCH,
      options: consts.BooleanType,
    }
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  listGenderType() {
    let genderType;
    this.userService.listGenderType().subscribe(v => genderType = v);
    return genderType;
  }

  listDegreeType() {
    let degreeType;
    this.userService.listDegreeType().subscribe(v => degreeType = v);
    return degreeType;
  }

  save = (data) => {
    return this.userService.save(data);
  }

  update = (data) => {
    return this.userService.update(data);
  }

  delete = (data: UserData) => {
    return this.userService.delete(data.id);
  }

}

export interface UserData extends DataItem {
  username: string;
  gender: number;
  email: string;
  age: number;
  censusRegister: string;
  degree: number;
  inPosition: number;
  regular: number;
}
