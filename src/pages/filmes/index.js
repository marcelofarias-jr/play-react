import { Hero } from "components/hero";
import React from "react";
import { Container } from "react-bootstrap";

export const PageFilmes = () => {
    return (
        <>
           <Container className="filmes">
                <div className="filmes__description col-6">
                    <h1>Filmes</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc mi, gravida nec est et, mattis egestas turpis. Cras vitae est risus. Sed eu venenatis mi. Praesent facilisis tellus eget eros fringilla hendrerit. Integer sed fermentum dolor. Donec convallis, libero a egestas ornare, nunc elit vulputate quam, sed auctor dolor dui nec eros. Sed in vehicula sem. Proin tristique, turpis nec euismod faucibus, augue risus porta massa, sit amet convallis justo nisi non odio. Morbi quis leo mollis dui bibendum egestas id sit amet ligula. Sed sit amet erat ornare turpis porttitor iaculis vel ac massa. In commodo leo eget convallis eleifend.
                    </p>
                </div>
                <div className="filmes__cards col-6">

                </div>
           </Container>
        </>
    );
}
