Banco de dados

usuarios

- Nome completo
- email
- senha
- data aniversário
- categoria
- cargo
- role = admin, member
- local (ios, vtco, ssa)

Registers

- quantity
- date
- leitura em ingles
- visit
- receive
- userId (objectId)

src
|-app.ts
|-validators (Joi validator node)
|-routes
|-controllers
|-services
|-|-registerDailyService.ts
|-|-loginService.ts
|-|-ListMembersService.ts
|-|-ShowMemberService.ts
|-|-AnaliticsGeneralService.ts
|-|-AnaliticsPerMemberService.ts
|-|-HistoricPerMemberService.ts
|-database
|-constants
|-utils
