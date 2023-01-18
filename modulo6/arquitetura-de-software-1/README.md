# To Do List

## ESTRUTURA DE DADOS  
  
* ## Usuários
  * id
  * name
  * nickname 
  * email

* ## Tarefas 
  * id
  * title
  * description
  * deadline
  * status: `"to_do" || "doing" || "done"`
  * author 
  * assignees
   
---

## CRIAÇÃO DE TABELAS - MySql

```sql
CREATE TABLE to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
);
```
```sql
CREATE TABLE to_do_list_tasks (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    deadline DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
);
```
```sql
CREATE TABLE to_do_list_assignees (
    task_id VARCHAR(64),
    assignee_id VARCHAR(64),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
    FOREIGN KEY (assignee_id) REFERENCES to_do_list_users(id)
);
```
---

## ENDPOINTS 

* ## Criar usuário
  * Método: PUT
  * Path: `/user`
  * Body:
    * name (obrigatório)
    * nickname (obrigatório)
    * email (obrigatório)

* ## Pegar usuário pelo id
  * Método: GET
  * Path: `/user/:id`
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    * nickname


* ## Editar usuário**
  * Método: POST
  * Path: `/user/edit/:id`
  * Body:
    * name (opcional; não pode ser vazio)
    * nickname (opcional; não pode ser vazio)
    * email (opcional; não pode ser vazio)


* ## Criar tarefa
  * Método: PUT
  * Path: `/task`
  * Body:
    * title (obrigatório)
    * description (obrigatório)
    * deadline (obrigatório; formato `YYYY-MM-DD`)
    * authorId

* ## Pegar tarefa pelo id
  * Método: GET
  * Path: `/task/:id`
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    * title 
    * description
    * deadline (formato `YYYY-MM-DD`)
    * status
    * authorId
    * authorNickname