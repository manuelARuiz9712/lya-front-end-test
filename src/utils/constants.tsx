import {Button,Dropdown,Menu} from "antd";

export const APP_NAME = "FRONT-END-TEST";
export const DateFormatString = "YYYY-MM-DD";

export const getTableColums = (callbackCheck:any,callbackEdit:any)=>{

  const MenuItems = (props:any)=><Menu >
  <Menu.Item key="1" onClick={()=>callbackEdit(props.data)}   >Editar</Menu.Item>
  <Menu.Item key="2" onClick={()=>callbackCheck(props.data)} >Realizar</Menu.Item>
 
</Menu>;

return  [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
    },
    {
        title: 'Fecha',
        dataIndex: 'date',
        key: 'date',
      },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Accion',
      dataIndex: '',
      key: 'delete',
      //fixed: 'right',
      render: (props:any) =>  (<Dropdown.Button overlay={<MenuItems 
        data={props}

      />}>Acciones</Dropdown.Button>)
      
      
    
    }
  ];

}

