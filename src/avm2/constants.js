const CONSTANT_Utf8               = 0x01;
const CONSTANT_Int                = 0x03;
const CONSTANT_UInt               = 0x04;
const CONSTANT_PrivateNamespace   = 0x05;
const CONSTANT_Double             = 0x06;
const CONSTANT_QName              = 0x07; // ns::name, const ns, const name
const CONSTANT_Namespace          = 0x08;
const CONSTANT_Multiname          = 0x09; // [ns...]::name, const [ns...], const name
const CONSTANT_False              = 0x0A;
const CONSTANT_True               = 0x0B;
const CONSTANT_Null               = 0x0C;
const CONSTANT_QNameA             = 0x0D; // @ns::name, const ns, const name
const CONSTANT_MultinameA         = 0x0E; // @[ns...]::name, const [ns...], const name
const CONSTANT_RTQName            = 0x0F; // ns::name, var ns, const name
const CONSTANT_RTQNameA           = 0x10; // @ns::name, var ns, const name
const CONSTANT_RTQNameL           = 0x11; // ns::[name], var ns, var name
const CONSTANT_RTQNameLA          = 0x12; // @ns::[name], var ns, var name
const CONSTANT_NameL              = 0x13; // o[name], var name
const CONSTANT_NameLA             = 0x14; // @[name], var name
const CONSTANT_NamespaceSet       = 0x15;
const CONSTANT_PackageNamespace   = 0x16; // namespace for a package
const CONSTANT_PackageInternalNS  = 0x17;
const CONSTANT_ProtectedNamespace = 0x18;
const CONSTANT_ExplicitNamespace  = 0x19;
const CONSTANT_StaticProtectedNS  = 0x1A;
const CONSTANT_MultinameL         = 0x1B;
const CONSTANT_MultinameLA        = 0x1C;
const CONSTANT_ClassSealed        = 0x01;
const CONSTANT_ClassFinal         = 0x02;
const CONSTANT_ClassInterface     = 0x04;
const CONSTANT_ClassProtectedNs   = 0x08;

const TRAIT_Slot                  = 0;
const TRAIT_Method                = 1;
const TRAIT_Getter                = 2;
const TRAIT_Setter                = 3;
const TRAIT_Class                 = 4;
const TRAIT_Function              = 5;
const TRAIT_Const                 = 6;

const ATTR_Final                  = 0x01;
const ATTR_Override               = 0x02;
const ATTR_Metadata               = 0x04;

const SLOT_var                    = 0;
const SLOT_method                 = 1;
const SLOT_getter                 = 2;
const SLOT_setter                 = 3;
const SLOT_class                  = 4;
const SLOT_function               = 6;

const METHOD_Arguments            = 0x1;
const METHOD_Activation           = 0x2;
const METHOD_Needrest             = 0x4;
const METHOD_HasOptional          = 0x8;
const METHOD_IgnoreRest           = 0x10;
const METHOD_Native               = 0x20;
const METHOD_Setsdxns             = 0x40;
const METHOD_HasParamNames        = 0x80;

const OP_bkpt = 0x01;
const OP_nop = 0x02;
const OP_throw = 0x03;
const OP_getsuper = 0x04;
const OP_setsuper = 0x05;
const OP_dxns = 0x06;
const OP_dxnslate = 0x07;
const OP_kill = 0x08;
const OP_label = 0x09;
const OP_lf32x4 = 0x0A;
const OP_sf32x4 = 0x0B;
const OP_ifnlt = 0x0C;
const OP_ifnle = 0x0D;
const OP_ifngt = 0x0E;
const OP_ifnge = 0x0F;
const OP_jump = 0x10;
const OP_iftrue = 0x11;
const OP_iffalse = 0x12;
const OP_ifeq = 0x13;
const OP_ifne = 0x14;
const OP_iflt = 0x15;
const OP_ifle = 0x16;
const OP_ifgt = 0x17;
const OP_ifge = 0x18;
const OP_ifstricteq = 0x19;
const OP_ifstrictne = 0x1A;
const OP_lookupswitch = 0x1B;
const OP_pushwith = 0x1C;
const OP_popscope = 0x1D;
const OP_nextname = 0x1E;
const OP_hasnext = 0x1F;
const OP_pushnull = 0x20;
const OP_pushundefined = 0x21;
const OP_pushfloat = 0x22;
const OP_nextvalue = 0x23;
const OP_pushbyte = 0x24;
const OP_pushshort = 0x25;
const OP_pushtrue = 0x26;
const OP_pushfalse = 0x27;
const OP_pushnan = 0x28;
const OP_pop = 0x29;
const OP_dup = 0x2A;
const OP_swap = 0x2B;
const OP_pushstring = 0x2C;
const OP_pushint = 0x2D;
const OP_pushuint = 0x2E;
const OP_pushdouble = 0x2F;
const OP_pushscope = 0x30;
const OP_pushnamespace = 0x31;
const OP_hasnext2 = 0x32;
const OP_li8 = 0x35;
const OP_li16 = 0x36;
const OP_li32 = 0x37;
const OP_lf32 = 0x38;
const OP_lf64 = 0x39;
const OP_si8 = 0x3A;
const OP_si16 = 0x3B;
const OP_si32 = 0x3C;
const OP_sf32 = 0x3D;
const OP_sf64 = 0x3E;
const OP_newfunction = 0x40;
const OP_call = 0x41;
const OP_construct = 0x42;
const OP_callmethod = 0x43;
const OP_callstatic = 0x44;
const OP_callsuper = 0x45;
const OP_callproperty = 0x46;
const OP_returnvoid = 0x47;
const OP_returnvalue = 0x48;
const OP_constructsuper = 0x49;
const OP_constructprop = 0x4A;
const OP_callsuperid = 0x4B;
const OP_callproplex = 0x4C;
const OP_callinterface = 0x4D;
const OP_callsupervoid = 0x4E;
const OP_callpropvoid = 0x4F;
const OP_sxi1 = 0x50;
const OP_sxi8 = 0x51;
const OP_sxi16 = 0x52;
const OP_applytype = 0x53;
const OP_pushfloat4 = 0x54;
const OP_newobject = 0x55;
const OP_newarray = 0x56;
const OP_newactivation = 0x57;
const OP_newclass = 0x58;
const OP_getdescendants = 0x59;
const OP_newcatch = 0x5A;
const OP_findpropstrict = 0x5D;
const OP_findproperty = 0x5E;
const OP_finddef = 0x5F;
const OP_getlex = 0x60;
const OP_setproperty = 0x61;
const OP_getlocal = 0x62;
const OP_setlocal = 0x63;
const OP_getglobalscope = 0x64;
const OP_getscopeobject = 0x65;
const OP_getproperty = 0x66;
const OP_getouterscope = 0x67;
const OP_initproperty = 0x68;
const OP_setpropertylate = 0x69;
const OP_deleteproperty = 0x6A;
const OP_deletepropertylate = 0x6B;
const OP_getslot = 0x6C;
const OP_setslot = 0x6D;
const OP_getglobalslot = 0x6E;
const OP_setglobalslot = 0x6F;
const OP_convert_s = 0x70;
const OP_esc_xelem = 0x71;
const OP_esc_xattr = 0x72;
const OP_convert_i = 0x73;
const OP_convert_u = 0x74;
const OP_convert_d = 0x75;
const OP_convert_b = 0x76;
const OP_convert_o = 0x77;
const OP_checkfilter = 0x78;
const OP_convert_f = 0x79;
const OP_unplus = 0x7a;
const OP_convert_f4 = 0x7b;
const OP_coerce = 0x80;
const OP_coerce_b = 0x81;
const OP_coerce_a = 0x82;
const OP_coerce_i = 0x83;
const OP_coerce_d = 0x84;
const OP_coerce_s = 0x85;
const OP_astype = 0x86;
const OP_astypelate = 0x87;
const OP_coerce_u = 0x88;
const OP_coerce_o = 0x89;
const OP_negate = 0x90;
const OP_increment = 0x91;
const OP_inclocal = 0x92;
const OP_decrement = 0x93;
const OP_declocal = 0x94;
const OP_typeof = 0x95;
const OP_not = 0x96;
const OP_bitnot = 0x97;
const OP_add_d = 0x9B;
const OP_add = 0xA0;
const OP_subtract = 0xA1;
const OP_multiply = 0xA2;
const OP_divide = 0xA3;
const OP_modulo = 0xA4;
const OP_lshift = 0xA5;
const OP_rshift = 0xA6;
const OP_urshift = 0xA7;
const OP_bitand = 0xA8;
const OP_bitor = 0xA9;
const OP_bitxor = 0xAA;
const OP_equals = 0xAB;
const OP_strictequals = 0xAC;
const OP_lessthan = 0xAD;
const OP_lessequals = 0xAE;
const OP_greaterthan = 0xAF;
const OP_greaterequals = 0xB0;
const OP_instanceof = 0xB1;
const OP_istype = 0xB2;
const OP_istypelate = 0xB3;
const OP_in = 0xB4;
const OP_increment_i = 0xC0;
const OP_decrement_i = 0xC1;
const OP_inclocal_i = 0xC2;
const OP_declocal_i = 0xC3;
const OP_negate_i = 0xC4;
const OP_add_i = 0xC5;
const OP_subtract_i = 0xC6;
const OP_multiply_i = 0xC7;
const OP_getlocal0 = 0xD0;
const OP_getlocal1 = 0xD1;
const OP_getlocal2 = 0xD2;
const OP_getlocal3 = 0xD3;
const OP_setlocal0 = 0xD4;
const OP_setlocal1 = 0xD5;
const OP_setlocal2 = 0xD6;
const OP_setlocal3 = 0xD7;
const OP_debug = 0xEF;
const OP_debugline = 0xF0;
const OP_debugfile = 0xF1;
const OP_bkptline = 0xF2;
const OP_timestamp = 0xF3;

const OP_Names = [
    "OP_0x00       ",
    "bkpt          ",
    "nop           ",
    "throw         ",
    "getsuper      ",
    "setsuper      ",
    "dxns          ",
    "dxnslate      ",
    "kill          ",
    "label         ",
    "OP_0x0A       ",
    "OP_0x0B       ",
    "ifnlt         ",
    "ifnle         ",
    "ifngt         ",
    "ifnge         ",
    "jump          ",
    "iftrue        ",
    "iffalse       ",
    "ifeq          ",
    "ifne          ",
    "iflt          ",
    "ifle          ",
    "ifgt          ",
    "ifge          ",
    "ifstricteq    ",
    "ifstrictne    ",
    "lookupswitch  ",
    "pushwith      ",
    "popscope      ",
    "nextname      ",
    "hasnext       ",
    "pushnull      ",
    "pushundefined ",
    "pushfloat     ",
    "nextvalue     ",
    "pushbyte      ",
    "pushshort     ",
    "pushtrue      ",
    "pushfalse     ",
    "pushnan       ",
    "pop           ",
    "dup           ",
    "swap          ",
    "pushstring    ",
    "pushint       ",
    "pushuint      ",
    "pushdouble    ",
    "pushscope     ",
    "pushnamespace ",
    "hasnext2      ",
    "OP_0x33       ", // lix8 (internal)
    "OP_0x34       ", // lix16 (internal)
    "li8           ",
    "li16          ",
    "li32          ",
    "lf32          ",
    "lf64          ",
    "si8           ",
    "si16          ",
    "si32          ",
    "sf32          ",
    "sf64          ",
    "OP_0x3F       ",
    "newfunction   ",
    "call          ",
    "construct     ",
    "callmethod    ",
    "callstatic    ",
    "callsuper     ",
    "callproperty  ",
    "returnvoid    ",
    "returnvalue   ",
    "constructsuper",
    "constructprop ",
    "callsuperid   ",
    "callproplex   ",
    "callinterface ",
    "callsupervoid ",
    "callpropvoid  ",
    "sxi1          ",
    "sxi8          ",
    "sxi16         ",
    "applytype     ",
    "pushfloat4    ",
    "newobject     ",
    "newarray      ",
    "newactivation ",
    "newclass      ",
    "getdescendants",
    "newcatch      ",
    "OP_0x5B       ", // findpropglobalstrict (internal)
    "OP_0x5C       ", // findpropglobal (internal)
    "findpropstrict",
    "findproperty  ",
    "finddef       ",
    "getlex        ",
    "setproperty   ",
    "getlocal      ",
    "setlocal      ",
    "getglobalscope",
    "getscopeobject",
    "getproperty   ",
    "getouterscope ",
    "initproperty  ",
    "OP_0x69       ",
    "deleteproperty",
    "OP_0x6B       ",
    "getslot       ",
    "setslot       ",
    "getglobalslot ",
    "setglobalslot ",
    "convert_s     ",
    "esc_xelem     ",
    "esc_xattr     ",
    "convert_i     ",
    "convert_u     ",
    "convert_d     ",
    "convert_b     ",
    "convert_o     ",
    "checkfilter   ",
    "convert_f     ",
    "unplus        ",
    "convert_f4    ",
    "OP_0x7C       ",
    "OP_0x7D       ",
    "OP_0x7E       ",
    "OP_0x7F       ",
    "coerce        ",
    "coerce_b      ",
    "coerce_a      ",
    "coerce_i      ",
    "coerce_d      ",
    "coerce_s      ",
    "astype        ",
    "astypelate    ",
    "coerce_u      ",
    "coerce_o      ",
    "OP_0x8A       ",
    "OP_0x8B       ",
    "OP_0x8C       ",
    "OP_0x8D       ",
    "OP_0x8E       ",
    "OP_0x8F       ",
    "negate        ",
    "increment     ",
    "inclocal      ",
    "decrement     ",
    "declocal      ",
    "typeof        ",
    "not           ",
    "bitnot        ",
    "OP_0x98       ",
    "OP_0x99       ",
    "OP_0x9A       ",
    "add_d         ",
    "OP_0x9C       ",
    "OP_0x9D       ",
    "OP_0x9E       ",
    "OP_0x9F       ",
    "add           ",
    "subtract      ",
    "multiply      ",
    "divide        ",
    "modulo        ",
    "lshift        ",
    "rshift        ",
    "urshift       ",
    "bitand        ",
    "bitor         ",
    "bitxor        ",
    "equals        ",
    "strictequals  ",
    "lessthan      ",
    "lessequals    ",
    "greaterthan   ",
    "greaterequals ",
    "instanceof    ",
    "istype        ",
    "istypelate    ",
    "in            ",
    "OP_0xB5       ",
    "OP_0xB6       ",
    "OP_0xB7       ",
    "OP_0xB8       ",
    "OP_0xB9       ",
    "OP_0xBA       ",
    "OP_0xBB       ",
    "OP_0xBC       ",
    "OP_0xBD       ",
    "OP_0xBE       ",
    "OP_0xBF       ",
    "increment_i   ",
    "decrement_i   ",
    "inclocal_i    ",
    "declocal_i    ",
    "negate_i      ",
    "add_i         ",
    "subtract_i    ",
    "multiply_i    ",
    "OP_0xC8       ",
    "OP_0xC9       ",
    "OP_0xCA       ",
    "OP_0xCB       ",
    "OP_0xCC       ",
    "OP_0xCD       ",
    "OP_0xCE       ",
    "OP_0xCF       ",
    "getlocal0     ",
    "getlocal1     ",
    "getlocal2     ",
    "getlocal3     ",
    "setlocal0     ",
    "setlocal1     ",
    "setlocal2     ",
    "setlocal3     ",
    "OP_0xD8       ",
    "OP_0xD9       ",
    "OP_0xDA       ",
    "OP_0xDB       ",
    "OP_0xDC       ",
    "OP_0xDD       ",
    "OP_0xDE       ",
    "OP_0xDF       ",
    "OP_0xE0       ",
    "OP_0xE1       ",
    "OP_0xE2       ",
    "OP_0xE3       ",
    "OP_0xE4       ",
    "OP_0xE5       ",
    "OP_0xE6       ",
    "OP_0xE7       ",
    "OP_0xE8       ",
    "OP_0xE9       ",
    "OP_0xEA       ",
    "OP_0xEB       ",
    "OP_0xEC       ",
    "OP_0xED       ",
    "OP_0xEE       ",
    "debug         ",
    "debugline     ",
    "debugfile     ",
    "bkptline      ",
    "timestamp     ",
    "OP_0xF4       ",
    "OP_0xF5       ",
    "OP_0xF6       ",
    "OP_0xF7       ",
    "OP_0xF8       ",
    "OP_0xF9       ",
    "OP_0xFA       ",
    "OP_0xFB       ",
    "OP_0xFC       ",
    "OP_0xFD       ",
    "OP_0xFE       ",
    "OP_0xFF       "];

function getOpName(op) {
    return OP_Names[op];
}
