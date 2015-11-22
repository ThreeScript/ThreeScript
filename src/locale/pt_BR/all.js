// cameras / Câmeras

TS.camera_perspectiva = TS.percam;
TS.camera_ortografica = TS.ortcam;
TS.camera_cubica = TS.cubcam;
TS.alterar_matriz_de_projecao = TS.updpromat;
TS.olhar_para = TS.lookat;

// container / elemento_dom

TS.elemento_dom = TS.container;
TS.ao_redimensionar = TS.onresize;
TS.ao_rato = TS.onmouse;

// exemplos

TS.controle_de_primeira_pessoa = TS.first_person_control;
TS.efeito_de_anaglifo = TS.anaglyph_effect;

// extras

// extras/geometries ::  extras/geometrias

TS.geometria_de_caixa = TS.boxgeo;
TS.geometria_de_circulo = TS.cirgeo;
TS.geometria_bufferizada_de_circulo = TS.cirbufgeo;
TS.geometria_de_cilindro = TS.cylgeo;
TS.geometria_de_dodecaedro = TS.dodgeo;
TS.geometria_de_borda = TS.edggeo;
TS.geometria_de_extrusao = TS.extgeo;
TS.geometria_de_icosaedro = TS.icogeo;
TS.geometria_de_torno = TS.latgeo;
TS.geometria_de_octaedro = TS.octgeo;
TS.geometria_parametrica = TS.pargeo;
TS.geometria_bufferizada_de_plano = TS.plabufgeo;
TS.geometria_de_plano = TS.plageo;
TS.geometria_de_poliedro = TS.polgeo;
TS.geometria_de_anel = TS.ringeo;
TS.geometria_de_forma = TS.shageo;
TS.geometria_bufferizada_de_esfera = TS.sphbufgeo;
TS.geometria_de_esfera = TS.sphgeo;
TS.geometria_de_tetraedro = TS.tetgeo;
TS.geometria_de_texto = TS.txtgeo;
TS.geometria_de_toro = TS.torgeo;
TS.geometria_de_toro_de_no = TS.knogeo;
TS.geometria_de_tubo = TS.tubgeo;
TS.geometria_de_fios = TS.wirgeo;

// ligths :: luzes

TS.luz_ambiente = TS.amblig;
TS.luz_direcional = TS.dirlig;
TS.luz_hemisferica = TS.hemlig;
TS.luz_de_holofote = TS.spolig;
TS.luz_de_ponto = TS.poilig;

// loaders :: carregadores
TS.carregar_json = TS.loajso;
TS.carregador_de_textura = TS.texloa;

// materials / materiais

TS.material_de_linha = TS.linemat;
TS.material_de_linha_pontilhada = TS.dasmat;
TS.material_basico = TS.basmat;
TS.material_de_profundidade = TS.depmat;
TS.material_lambert = TS.lammat;
TS.material_normal = TS.normat;
TS.material_phong = TS.phomat;
TS.material_multiplo = TS.mulmat;
TS.material_de_pontos = TS.poimat;
TS.material_de_face = TS.facmat;
TS.material_bruto_de_shader = TS.rawmat;
TS.material_de_shader = TS.shamat;
TS.material_de_duente = TS.sprimat;
TS.material_basico_de_cores = TS.mesh_basic_colors_material;

// math :: matematica

TS.caixa2 = TS.box2;
TS.caixa3 = TS.box3;
TS.cor = TS. color;
// TS.euler = TS. euler;
TS.tronco = TS. frustrum;
TS.linha3 = TS. line3;
TS.matematica = TS. math;
TS.matriz3 = TS. matrix3;
TS.matriz4 = TS. matrix4;
TS.plano = TS. plane;
TS.quaterniao = TS. quaternion;
TS.raio = TS. ray;
TS.esfera = TS. sphere;
TS.estriado = TS. spline;
TS.triangulo = TS. triangle;
TS.vetor2 = TS. vec2;
TS.vetor3 = TS. vec3;
TS.vetor4 = TS. vec4;

// meshes :: malhas

TS.malha = TS.mesh;

TS.malha_de_caixa = TS.boxmes;
TS.malha_de_circulo = TS.cirmes;
TS.malha_bufferizada_de_circulo = TS.cirbufmes;
TS.malha_de_cilindro = TS.cylmes;
TS.malha_de_dodecaedro = TS.dodmes;
TS.malha_de_borda = TS.edgmes;
TS.malha_de_extrusao = TS.extmes;
TS.malha_de_icosaedro = TS.icomes;
TS.malha_de_torno = TS.latmes;
TS.malha_de_octaedro = TS.octmes;
TS.malha_parametrica = TS.parmes;
TS.malha_bufferizada_de_plano = TS.plabufmes;
TS.malha_de_plano = TS.plames;
TS.malha_de_poliedro = TS.polmes;
TS.malha_de_anel = TS.rinmes;
TS.malha_de_forma = TS.shames;
TS.malha_bufferizada_de_esfera = TS.sphbufmes;
TS.malha_de_esfera = TS.sphmes;
TS.malha_de_tetraedro = TS.tetmes;
TS.malha_de_texto = TS.txtmes;
TS.malha_de_toro = TS.tormes;
TS.malha_de_toro_de_no = TS.knomes;
TS.malha_de_tubo = TS.tubmes;
TS.malha_de_fios = TS.wirmes;

// renderers :: renderizadores

TS.renderizador_webgl = TS.wglren;

TS.relacao_de_pixels = TS.pixrat;

TS.nevoa = TS.fog;
TS.nevoa_exponencial_2 = TS.fogexp2;
TS.adicionar = TS.add;
TS.subtrair = TS.sub;
TS.fazer_com_vetor3 = TS.objto;
TS.posicionar = TS.pos;
TS.girar = TS.rot;
TS.escala = TS.sca;
TS.deslocamento = TS.tra;
TS.lancar_sombra = TS.cassha;
TS.nao_lancar_sombra = TS.notcassha;
TS.receber_sombra = TS.recsha;
TS.nao_receber_sombra = TS.notrecsha;
TS.animar = TS.animate;
TS.processar = TS.renderizar = TS.render;

// scene / cena

TS.cena = TS.scene;

// textures :: texturas

TS.textura_de_canvas = TS.cantex;
TS.carregar_textura_de_cubo = TS.loatexcub;
