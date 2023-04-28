for(let i = 0; i < alumns.length; i++) {
    const alumn = alumns[i];
    const approved = (alumn.T1 ? 1 : 0) + (alumn.T2 ? 1 : 0) + (alumn.T3 ? 1 : 0);
    alumns.isApproved = (approved >= 2);
};